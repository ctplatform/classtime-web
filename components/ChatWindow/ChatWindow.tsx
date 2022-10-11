import { useState, useEffect } from "react";
import styles from "./ChatWindow.module.scss";

const ChatWindow = (props) => {
  //In the future we need to replace 'Chat box here' with a hook
  return (
    <>
      <div className={styles.messageSection}>
        <div className={styles.messageClassName}>
          <h1>{props.name}</h1>
        </div>
        <div className={styles.messageDisplayMessage}>
          <h1>{props.messages}</h1>
        </div>
        <div className={styles.messageChatBox}>
          <h1>CHAT BOX HERE</h1>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
