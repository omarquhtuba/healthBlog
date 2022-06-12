import styles from "../../styles/Product.module.css";
import axios from "axios";
import parse from 'html-react-parser';
import Intro from '../../components/Intro';
import {useStore} from '../../client/context'
import {getValue} from '../../utils/common';

const Product = ({post}) => {
  const [state, dispatch] = useStore();
  const user = getValue(state, ["user"], null)
  const authenticated = getValue(state, ["user", "authenticated"], false)


  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/post/" + post._id
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <Intro/> 
      <div className={styles.left}>
        {post.userId === user.email &&
        <span className={styles.delete} onClick={handleDelete}>Del</span>}
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{parse(post.desc)}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://health-advisor-blog-m38724uvp-omarquhtuba.vercel.app/api/post/${params.id}`
  );
  return {
    props: {
      post: res.data,
    },
  };
};

export default Product;
