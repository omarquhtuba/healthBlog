import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({category}) => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={category.img} alt="" width="500" height="500" />
      <h1 className={styles.title}>{category.title}</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
