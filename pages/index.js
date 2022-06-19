import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import CarIndexCard from "../components/Index/CarIndexCard";

import accent from "../public/images/cars_index/accent.jpg";
import creta from "../public/images/cars_index/creta.jpg";
import elantra from "../public/images/cars_index/elantra.jpg";
import i10 from "../public/images/cars_index/i10.jpg";
import kona from "../public/images/cars_index/kona.jpg";
import porter_150 from "../public/images/cars_index/porter_150.jpg";
import solati from "../public/images/cars_index/solati.jpg";
import tucson from "../public/images/cars_index/tucson.jpg";
import CarCard from "../components/CarParts/CarCard";
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

const CARS = [
  {
    _id:"car1",
    name:"ACCENT",
    image:"/images/cars_index/accent.jpg",
    price:"462.000.000"
  },
  {
    _id:"car2",
    name:"CRETA",
    image:"/images/cars_index/creta.jpg",
    price:"620.000.000"
  },
  {
    _id:"car3",
    name:"ELANTRA",
    image:"/images/cars_index/elantra.jpg",
    price:"580.000.000"
  },
  {
    _id:"car4",
    name:"I10",
    image:"/images/cars_index/i10.jpg",
    price:"380.000.000"
  },
  {
    _id:"car5",
    name:"KONA",
    image:"/images/cars_index/kona.jpg",
    price:"636.000.000"
  },
  {
    _id:"car6",
    name:"TUCSON",
    image:"/images/cars_index/tucson.jpg",
    price:"825.000.000"
  },
  {
    _id:"car7",
    name:"POTER 150",
    image:"/images/cars_index/porter_150.jpg",
    price:"384.000.000"
  },
  {
    _id:"car8",
    name:"SOLATI",
    image:"/images/cars_index/solati.jpg",
    price:"1.080.000.000"
  },
]

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
        <Container>
          <div className="d-flex justify-content-center mt-5" style={{color:"#0176AB"}}>
            <h3>GIÁ THAM KHẢO CÁC DÒNG XE</h3>
          </div>
          <Row>
            {CARS.map((item, index) => {
              return <CarIndexCard car={item} key={item._id}/>
            })}
          </Row>

        </Container>

      </main>

    </div>
  );
}
