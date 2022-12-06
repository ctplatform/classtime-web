import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import React, { useState } from 'react';

const ChatBox = () => {
// state to store messages
const [messages, setMessages] = useState([]);

// function to handle message submission
const handleSubmit = (e) => {
e.preventDefault();

// get the message from the input
const input = e.target.elements.message;
const message = input.value;

// add the message to the messages state
setMessages([messages, message]);

// clear the input
input.value = '';
}

// function to display messages
const displayMessages = () => {
return messages.map((message, index) => <p key={index}>{message}</p>);
}

return (
<div>
{/* form to submit messages */}
<form onSubmit={handleSubmit}>
<input type="text" name="message" />
<button type="submit">Send</button>
</form>

Copy code
  {/* display messages */}
  {displayMessages()}
</div>
);
}

export default ChatBox;