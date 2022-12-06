import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import * as WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

//Array to store all messages
let messages: string[] = [];

wss.on('connection', (ws: WebSocket) => {
//Send all previous messages to the new user
messages.forEach(message => {
ws.send(message);
});

ws.on('message', (message: string) => {
//Add the new message to the array of messages
messages.push(message);

//Broadcast the message to all connected users
wss.clients.forEach((client: WebSocket) => {
  if (client !== ws && client.readyState === WebSocket.OPEN) {
    client.send(message);
  }
});
});
});

console.log('Chat server running on port 8080');
export default Home;
