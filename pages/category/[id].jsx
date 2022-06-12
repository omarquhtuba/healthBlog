import React from 'react'
import Head from 'next/head';
import axios from 'axios';
import styles from "../../styles/Home.module.css";
import PostCard from '../../components/PostCard';

export default function category({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <div className={styles.wrapper}>
        {pizzaList.map((post) =>(
          <PostCard post={post} key={post._id}/>
        ))}
          
      </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`https://health-advisor-blog-m38724uvp-omarquhtuba.vercel.app/api/category?cat=${params.id}`);
    return {
      props: {
        pizzaList: res.data,
      },
    };
  };