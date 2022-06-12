import React, { useEffect, useState } from 'react'
import styles from'../styles/Hooks.module.css';
import {useWindowScroll} from 'react-use';

const Scroll = () => {
    const { y : pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(()=> {
        if(pageYOffset > 400) {
            setVisible(true);
        }else{
            setVisible(false);
        }
    },[pageYOffset])

    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})

    if(!visible){
        return false;
    }

  return (
    <div className={styles.scrollContainer} onClick={scrollToTop}>
        <div className={styles.scroll}>Top</div>
    </div>
  )
}

export default Scroll