import { useState, useEffect } from "react";
import styles from "./MessageDivider.module.scss";
//MessageDivider is a component which renders a small divider between messages of differing dates and eventaully times
const MessageDivider = (props: any) => {
  return (
    <div className={styles.messageDate}>
      <p className={styles.word}>{props.date}</p>
    </div>
  );
};

export default MessageDivider;
