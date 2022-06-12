import React from 'react'
import spinner from '../public/img/Spin.gif'
import styles from '../styles/Hooks.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
        <div className={styles.spinner}>Loading...</div>
    </div>
  )
}

export default Spinner