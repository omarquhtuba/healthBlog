import React from 'react'
import styles from "../styles/PizzaList.module.css";
import PostCard from './PostCard'

const SevList = ({pizzaList}) => {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>YOUR HEALTH ADVISOR</h1>
          <p className={styles.desc}>
            <strong>HOUR HEALTH ADVISOR</strong> aims to increase people's awarness about their health and gives health recommendations for all age groups according to the current health recommendations'
          </p>
          <div className={styles.wrapper}>
            {pizzaList.map((post) =>(
              <PostCard post={post} key={post._id}/>
            ))} 
          </div>
        </div>
      );
}

export default SevList