import { NextPage } from "next";
import Head from "next/head";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
      </Head>
      <ChatWindow name="Physics" messages="asdf, fghj, zxcv" />
    </div>
  );
};

export default Home;
