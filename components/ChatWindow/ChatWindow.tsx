import { useState, useEffect, useRef, useCallback } from "react";
import TextBar from "../TextBar/TextBar";
import styles from "./ChatWindow.module.scss";
import io from "socket.io-client";

const socket = io("http://localhost:3000/");

const ChatWindow = (props: any) => {
  //In the future we need to replace 'Chat box here' with a hook
  //We need to replace type of props
  const [messages, setMessages] = useState([
    { _id: 0, msg: "Hello" },
    { _id: 1, msg: "World" },
  ]);

  //Stores data about the current room
  const [room, setRoom] = useState<any>({});

  const [message, setMessage] = useState(""); //message box input state variable
  const [info, setInfo] = useState({ name: "", location: "" }); //Current friend location, name
  const [menu, setMenu] = useState(false); //state variable for side bar on mobile view.

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMenu = useCallback(() => setMenu(!menu));
  const handleClick = () => {
    let condition: any = false;
    if (window.innerWidth <= 826 && menu === true) {
      condition = setMenu(!menu);
    }
    return condition;
  };

  //These are refs to make sure the input msg box is focused on refresh
  //and that the msg scrolls down when messages are sent
  const inputRef = useRef(null);
  const msgSecRef = useRef(null);

  //I think this is how we would handle submit.
  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //    socket.emit("message", {
  //      userID: user._id,
  //      roomID: room.roomID,
  //      message: message,
  //      roomNum: room.room,
  //    });
  //    setMessage("");
  //  };

  useEffect(() => {
    /* This is where I will adding socket event listeners. 
      These even listeners will help me send data from the backend to
      the frontend. Once the data is retrieved on the front end state 
      variables will be updated accordingly 

    EMIT ACTIONS: --> socket.emit(action, params)


    1. 'switch-room', room: string 
    --> Used when user switches to differnt friend 
    (In the backend it switches the socket.io room)

    2. 'leave-room', room: string 
    --> Used before you write before you call switch room. 
    MUST LEAVE ROOM BEFORE JOINING NEW ROOM

    3. 'message' { userID: string, roomID: string, message: string, 
      roomNum: string } 
    --> USED WHEN NEW MESSAGE ENTERED
  */

    //Sent from Backend --> After backend finishes procesing adding a new room
    const joinRoomHandler = async ({ friendName, roomID, roomNum }) => {
      socket.emit("leave-room", room.room);
      socket.emit("switch-room", roomNum);

      // const ret = await GetRoomData(roomID, user.username, user.password);
      // setRoom(ret);
    };

    //Sent from Backend --> After backend finishes procesing adding a new message
    //The website should add a mesage to the screen
    const messageHandler = ({ userID, message, _id }) => {
      let incomingMessage = {
        _id: _id,
        userID: userID,
        message: message,
      };

      let newMessages = room.messages;
      newMessages.push(incomingMessage);
      setRoom({ ...room, messages: newMessages });
    };

    //Sent from Backend --> After second user wants to add a class
    //First user updates  The website should update anonymous
    // with new username
    const ClassJoinedHandler = ({ name, roomID, location }) => {
      let updatedUserFriend = user;
      updatedUserFriend.map((friend) => {
        if (friend.roomID === roomID) {
          friend.name = name;
        }
        return friend;
      });
      setUser({ ...user, friends: updatedUserFriend });
    };

    //Update user, make api request to update currentMessages
    socket.on("join-room", joinRoomHandler);

    socket.on("message", messageHandler);

    socket.on("class-joined", ClassJoinedHandler);

    return () => {
      socket.off("join-room", joinRoomHandler);
      socket.off("message", messageHandler);
      socket.off("class-joined", ClassJoinedHandler);
    };
  }, []);

  return (
    <>
      <section>
        <section className="main">
          {/* the element above the chat UI */}
          <div className="header">
            <section className="information">
              <div className="name-location">
                <p className="id">{info.name}</p>
                <p className="location">{info.location}</p>
              </div>
            </section>
          </div>

          {/* the section containing the messages */}
          <div className="messages-chat" onClick={handleClick} ref={msgSecRef}>
            {messages.map((message) => {
              return (
                <div className={styles.messageWrapper} key={message._id}>
                  <p className={styles.msg}>{message.msg}</p>
                </div>
              );
            })}
          </div>

          <form className="message-input" onSubmit={handleSubmit}>
            <input
              type="text"
              className="message-box"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ref={inputRef}
            />
          </form>
        </section>
      </section>
    </>
  );
};

export default ChatWindow;
