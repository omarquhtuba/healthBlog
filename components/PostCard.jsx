import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";
import parse from 'html-react-parser'


const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${post._id}`} passHref>
      <h1 className={styles.title}>{post.title}</h1></Link>
      <p className={styles.desc}>
          {parse(post.desc.slice(0,20))}
      </p>
    </div>
  );
};

export default PostCard;