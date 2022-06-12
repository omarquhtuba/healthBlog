import Image from 'next/image'
import React from 'react'
import styles from '../styles/Main.module.css'

const Main = () => {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <div className={styles.title}>YOUR HEALTH ADVISOR</div>
            <div className={styles.desc}>We are interested in increasing public awarness towards their general health and providing them with the latest recommendations according to trusted studies</div>
        </div>
        <div className={styles.right}>
        <div className={styles.imgContainer}>
            <Image className={styles.imgContainer} src='/img/dose.jpg' width="480px" height="550px" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Main