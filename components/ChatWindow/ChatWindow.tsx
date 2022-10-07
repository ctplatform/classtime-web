import { useState, useEffect } from "react";
import styles from "./ChatWindow.module.scss";

const ChatWindow = () => {
  return (
    <>
      <div className={styles.messageSection}>
        <div className={styles.messageClassName}>
          <h1>CLASS NAME</h1>
        </div>
        <div className={styles.messageDisplayMessage}>
          <h1>CHAT MESSAGES HERE</h1>
        </div>
        <div className={styles.messageChatBox}>
          <h1>CHAT BOX HERE</h1>
        </div>
      </div>
    </> 
  );
};

export default ChatWindow;
