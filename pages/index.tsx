import { NextPage } from "next";
import Head from "next/head";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import styles from "../styles/Home.module.scss";
import TextBar from "../components/TextBar/TextBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
      </Head>
      <TextBar />
    </div>
  );
};

export default Home;
