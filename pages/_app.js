import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <div className="body-wrapper">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <div className="main-body">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  );
}

export default MyApp;
