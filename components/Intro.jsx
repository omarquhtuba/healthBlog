import React, { useEffect, useState } from 'react';
import {useWindowScroll} from 'react-use'
import styles from '../styles/Hooks.module.css';
const Intro = () => {

  const {x, y} = useWindowScroll()
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrolled((y/height) * 100)
  },[y])

  return (
    <div className={styles.scrollcontainer}>
      <div className={styles.indicator} style={{ width: `${scrolled}%`}}></div>
    </div>
  )
}

export default Intro