import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import useScrollPage from "../hooks/useScrollPage";
import { useState, createContext } from "react";

import { useMediaQuery } from "react-responsive";
import { SSRProvider } from "react-bootstrap";
export const AppContext = createContext(null);

function MyApp({ Component, pageProps }) {

  const [isFarHeader, setIsFarHeader] = useState(false);

  // const isMedium = useMediaQuery({
  //   query: `(max-width: ${768}px)`,
  // });
  const isSmall = useMediaQuery({
    query: `(max-width: ${768}px)`,
  });



  const headerHeight = isSmall === true ? 130 : 350;

  const handleScrollPage = () => {
    if (window.scrollY > headerHeight) {
      setIsFarHeader(true);
    } else {
      setIsFarHeader(false)
    }
  }

  useScrollPage(handleScrollPage, [headerHeight])

  return (
    <SSRProvider>
      <AppContext.Provider value={{ isFarHeader, headerHeight: headerHeight + "px" }}>
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
          <Footer />
        </div>
      </AppContext.Provider>
    </SSRProvider>

  );
}

export default MyApp;
