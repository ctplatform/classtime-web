import { useState, useEffect } from "react";
import styles from "./ChatMessage.module.scss";

const ChatMessage = (props) => {
  return (
    <>
      <div className={styles.chatMessageZAxis}>
        <section className={styles.chatMessageComponent}>
          <div className={styles.chatMessageBar1}>
            <div className={styles.chatMessageAccIcon}>
              {props.messageIcon}
              <section className={styles.chatMessageIconChar}>
                {props.messageName[0]}
              </section>
            </div>
          </div>
          <div className={styles.chatMessageBar2}>
            <h1 className={styles.chatMessageName}>{props.messageName}</h1>
            <h2 className={styles.chatMessageTime}>{props.messageTime}</h2>
            <p className={styles.chatMessageMessage}>{props.messageText}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChatMessage;
