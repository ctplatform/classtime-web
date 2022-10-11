import {useState, useEffect} from "react";
import styles from "./ChatMessage.module.scss";

const ChatMessage = () => {
    return (
      <>
        <div className={styles.chatMessageZAxis}>
          <section className={styles.chatMessageComponent}>
            <div className="chatMessageAccIcon">
              <h1>ICON HERE, MUI, RESIZE</h1>
            </div>
            <div className="chatMessageBar1">
              <h1>NAME, TIME</h1>
            </div>
            <div className="chatMessageBar2">
              <h1>MESSAGE</h1>
            </div>
          </section>
        </div>
      </>
    );
}

export default ChatMessage;