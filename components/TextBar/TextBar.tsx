import {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import styles from "./TextBar.module.scss"

const TextBar = ()  => {

    const [currentMessage, setCurrentMessage] = useState("");

    const handleOnSubmit = (e: any) => { //What should be the type of e, the textbar function, is there items that you would change
        e.preventDefault();
        setCurrentMessage("");
    }  

    return (
        <div className={styles.container}>
            <form onSubmit={handleOnSubmit}>
                className={styles.input}
                <input type="text" placeholder="Type your message..." 
                value={currentMessage} 
                onChange={(e) => setCurrentMessage(e.target.value)} 
                />
                <SendIcon />    
            </form>
        </div> 
    )
}

export default TextBar