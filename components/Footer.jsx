import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image className={styles.image} src="/img/anton.jpg" width="90" height="90" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            YOUR HEALTH ADVISOR.
          </h2>
        </div>
        
      </div>
      <div className={styles.item}>
      <div className={styles.card}>
        <Image className={styles.footimg} src="/img/facebook.png" width="20" height="20" alt="" />
        <Image className={styles.footimg} src="/img/instagram.png"  width="20" height="20" alt="" />
        </div>
        </div>
    </div>
  );
};

export default Footer;
