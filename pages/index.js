import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Carousel, Col, Row } from "react-bootstrap";

const IMAGES = [
  { src: "/images/1.jpg", title: "Hình giới thiệu 1" },
  { src: "/images/2.jpg", title: "Hình giới thiệu 2" },
  { src: "/images/3.jpg", title: "Hình giới thiệu 3" },
  { src: "/images/4.jpg", title: "Hình giới thiệu 4" },
  { src: "/images/5.jpg", title: "Hình giới thiệu 5" },
  { src: "/images/6.jpg", title: "Hình giới thiệu 6" },
  { src: "/images/7.jpg", title: "Hình giới thiệu 7" },
  { src: "/images/8.jpg", title: "Hình giới thiệu 8" },
  { src: "/images/9.jpg", title: "Hình giới thiệu 9" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Giới thiệu</title>
        <meta
          name="description"
          content="Chào mừng đến với trang dịch vụ của chúng tôi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Chào mừng đến với trang dịch vụ của chúng tôi
        </h1> */}

        <Row className={styles["carousel-introduction-wrapper"]}>
          <Col xs={12} md={9} lg={8}>
            <Carousel className={styles["carousel-introduction"]}>
              {IMAGES.map((item) => (
                <Carousel.Item key={item.src}>
                  <img src={item.src} alt={item.title} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        
      </main>

    </div>
  );
}
