import { NextPage } from "next";
import Head from "next/head";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import TextBar from "../components/TextBar/TextBar";
import styles from "../styles/Home.module.scss";
import MessageDivider from "../components/MessageDivider/MessageDivider";
const tmpMessages = [
  <p>message 1</p>,
  <p>afsdg</p>,
  <MessageDivider date="September 12, 2020" />,
  <p>message 3</p>,
  <p>zxcbbv</p>,
  <p>mnjkkl</p>,
  <MessageDivider date="Today" />,
  <p>Today's message</p>,
];
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
      </Head>
      <ChatWindow name="Physics" messages={tmpMessages} />
    </div>
  );
};

export default Home;
