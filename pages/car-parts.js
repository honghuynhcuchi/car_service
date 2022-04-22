import { Col, Container, Row } from "react-bootstrap";

import Banner from "../components/CarParts/Banner";
import CarCard from "../components/CarParts/CarCard";

import CAR_DATA from "../utils/cars-const";
import CAR_PARTS_DATA from "../utils/car-parts-const";
import Part from "../components/CarParts/Part";
import Head from "next/head";
import { Fragment } from "react";


const CarParts = () => {
    return <Fragment>
        <Head>
            <title>Bảng Giá Phụ Tùng</title>
        </Head>
        <Container style={{ marginTop: "25px" }} >
            <div>
                <div style={{ padding: "20px" }}>
                    <Banner title={"PHỤ TÙNG CHO CÁC DÒNG XE"} />
                </div>
                <Row>
                    {CAR_DATA.map((item, index) => {
                        return <Col md="6" lg="3" key={`${index}-${item._id}`}>
                            <div style={{ padding: "20px" }}>
                                <CarCard car={item} />
                            </div>
                        </Col>
                    })}
                </Row>
                <div style={{ padding: "20px 0px" }}>
                    <div style={{ padding: "20px" }}>
                        <Banner title={"PHỤ TÙNG GIÁ RẺ"} />
                    </div>
                    <div style={{ padding: "0px 30px" }}>
                        <Row style={{ background: "#FFFFFF", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius: "5px" }}>
                            {CAR_PARTS_DATA.map((part, index) => {
                                return <Part key={`${index} - ${part._id}`} part={part} />
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    </Fragment>
}


export default CarParts;