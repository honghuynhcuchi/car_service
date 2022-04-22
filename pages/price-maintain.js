import { Col, Container, Row } from "react-bootstrap";

import Banner from "../components/CarParts/Banner";
import CarCard from "../components/CarParts/CarCard";

import CAR_DATA from "../utils/cars-const";
import CAR_PARTS_DATA from "../utils/car-parts-const";
import Part from "../components/CarParts/Part";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import maintainTableImage from "../public/images/maintain-table.jpg";


const PriceMaintain = () => {
    return <Fragment>
        <Head>
            <title>Bảng Giá Bảo Dưỡng</title>
        </Head>
        <Container style={{ marginTop: "25px",marginBottom: "25px", display:"flex", flexDirection:"column", alignItems:"center" }} >
            <h1 style={{textAlign:"center", color:"#1f2674"}}>BẢNG GIÁ BẢO DƯỠNG ÐỊNH KỲ XE DU LỊCH HYUNDAI</h1>
           <Image src={maintainTableImage} />
        </Container>
    </Fragment>
}


export default PriceMaintain;