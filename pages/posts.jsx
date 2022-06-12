import React from 'react'
import axios from 'axios'
import styles from'../styles/PizzaList.module.css';
import PostCard from '../components/PostCard';

const Posts = ({postList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>POSTS</h1>
      <p className={styles.desc}>
        Health related posts
      </p>
      <div className={styles.wrapper}>
        {postList.map((post) =>(
          <PostCard post={post} key={post._id}/>
        ))}  
      </div>
    </div>
  )
}

export default Posts;

export const getServerSideProps = async () => {

  const res = await axios.get("https://health-advisor-blog.vercel.app/api/post");
  return {
    props: {
      postList: res.data,
      
    },
  };
};