import CAR_DATA from "../../utils/cars-const";
import CAR_PARTS_DATA from "../../utils/car-parts-const";
import { Fragment } from "react";
import Head from "next/head";
import Banner from "../../components/CarParts/Banner";
import Part from "../../components/CarParts/Part";
import { Container, Row } from "react-bootstrap";
export const getServerSideProps = async ({ params }) => {

    const car = CAR_DATA.find(item => item._id == params._id) || null;
    let parts = [];
    if (car) {
        parts = CAR_PARTS_DATA.filter(item => item.of_car.includes(car._id));
    }
    return {
        props: {
            car,
            parts
        }
    }
}


const ListPartOfCar = ({ car, parts }) => {
    if (!car) {
        return <Fragment>
            <Head>
                <title>Không tìm thấy kết quả</title>
            </Head>
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>Không tìm thấy kết quả</h3>
        </Fragment>
    }
    return <Fragment>
        <Head>
            <title>Phụ tùng của xe {car.name}</title>
        </Head>

        <Container style={{ marginTop: "25px" }} >
            <div>
               
                <div style={{ padding: "20px 0px" }}>
                    <div style={{ padding: "20px" }}>
                    <Banner title={`PHỤ TÙNG CHO CHO XE ${car.name}`} />
                    </div>
                    <div style={{ padding: "0px 30px" }}>
                        {parts.length <=0 && <h3 style={{ textAlign: "center", marginTop: "20px" }}>Không có phụ tùng cho loại xe này</h3>}
                        <Row style={{ background: "#FFFFFF", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius: "5px" }}>
                            {parts.map((part, index) => {
                                return <Part key={`${index} - ${part._id}`} part={part} />
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </Container>

    </Fragment>
}

export default ListPartOfCar;