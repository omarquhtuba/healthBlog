import styles from "../styles/Featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ages } from "../data";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 3)
    }
    if (direction === "r") {
      setIndex(index !== 3 ? index + 1 : 0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wra}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
        {ages.map((age) => (
          <div className={styles.featuredContainer}key={age.id} >
            <div className={styles.imgContainer} >
              <Image className={styles.image} src={age.img} alt="" width='400px' height='400px' />
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.inContainer}>
                <div className={styles.titleContainer}>{age.title}</div>
                <div className={styles.descContainer}>
                  <p>Check the latest recommendations for this age group</p>
                  <Link href={`/category/${age.title}`} passHref>
                  <button className={styles.button}>Check</button></Link>
                </div>
              </div>
              </div>
          </div>
        ))}
      </div>

      <div className={styles.RarrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
    </div>
  );
};

export default Featured;
