import { useState, useEffect } from "react";
import TextBar from "../TextBar/TextBar";
import styles from "./ChatWindow.module.scss";

const ChatWindow = (props: any) => {
  //In the future we need to replace 'Chat box here' with a hook
  //We need to replace type of props
  const [messages, setMessages] = useState([
    { _id: 0, msg: "Hello" },
    { _id: 1, msg: "World" },
  ]);

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
