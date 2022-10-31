import { useState, useEffect } from "react";
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

    //Update user, make api request to update currentMessages
    socket.on("join-room", joinRoomHandler);

    socket.on("message", messageHandler);

    return () => {
      socket.off("join-room", joinRoomHandler);
      socket.off("message", messageHandler);
    };
  }, []);

  return (
    <>
      <div className={styles.messageSection}>
        <div className={styles.messageClassName}>
          <h1>{props.name}</h1>
        </div>
        <div className={styles.messageDisplayMessage}>
          {messages.map((message) => {
            return (
              <div className={styles.messageWrapper} key={message._id}>
                <p className={styles.msg}>{message.msg}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.messageChatBox}>
          <TextBar />
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
