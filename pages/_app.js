import Layout from "../components/Layout";
import "../styles/globals.css";
import { StoreProvider} from "../client/context"

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
