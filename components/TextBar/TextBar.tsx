import { FormEvent, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import styles from "./TextBar.module.scss";

const TextBar = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  //the textbar function, is there items that you would change

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCurrentMessage("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          className={styles.input}
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <SendIcon className={styles.icon} />
      </form>
    </div>
  );
};

export default TextBar;
