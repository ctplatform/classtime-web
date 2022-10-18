import { NextPage } from "next";
import Head from "next/head";
import Times from "../components/times/times";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ClassTime!</title>
      </Head>
      <Times />
    </div>
  );
};

export default Home;
