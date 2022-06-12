import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import Main from "../components/Main";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import PostList from "../components/PostList";
import Scroll from "../components/Scroll";
import axios from "axios";

export default function Home({postList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Health Advisor</title>
        <meta name="description" content="Health Advisor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <Featured/>
      <PizzaList/>
      <PostList pizzaList={postList}/>
      <Scroll/>
    </div>
  );
}

export const getServerSideProps = async () => {

  const res = await axios.get("api/post");
  return {
    props: {
      postList: res.data, 
    },
  };
};