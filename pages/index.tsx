import { NextPage } from "next";
import Head from "next/head";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import styles from "../styles/Home.module.scss";
import TextBar from "../components/TextBar/TextBar";
import ChatMessage from "../components/ChatMessage/ChatMessage";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
      </Head>
      <ChatMessage messageIcon="" messageName="Tashi Sherpa" messageTime="9:28 PM" messageText="Hello World"/>
    </div>
  );
};

export default Home;
