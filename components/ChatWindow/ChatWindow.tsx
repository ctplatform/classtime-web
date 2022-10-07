import { useState, useEffect } from "react";
import styles from "./ChatWindow.module.scss";

const ChatWindow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messageSection}>
        <h1>Chat Window</h1>
      </div>
    </div>   
  );
};

export default ChatWindow;
