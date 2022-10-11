import {useState, useEffect} from "react";
import styles from "./ChatMessage.module.scss";

const ChatMessage = () => {
    return (
      <>
        <div className={styles.chatMessageZAxis}>
          <section className={styles.chatMessageComponent}>
            <div className={styles.chatMessageBar1}>
              <div className={styles.chatMessageAccIcon}>
                <h1 className={styles.placeholderMessageIcon}>ICON</h1>
              </div>
            </div>
            <div className={styles.chatMessageBar2}>
              <h1 className={styles.chatMessageName}>Tashi Sherpa</h1>
              <h2 className={styles.chatMessageTime}>9:28 PM</h2>
              <p className={styles.chatMessageMessage}>Hey, this is a placeholder chat!</p>
            </div>
          </section>
        </div>
      </>
    );
}

export default ChatMessage;