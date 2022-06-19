import { Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./CarIndexCard.module.css";
const CarIndexCard = ({ car }) => {



    return <Col xs={12} md={4}>
        <div style={{ padding: "20px" }}>
            <div className={`${styles['car-index-wrapper']}`}>
                <div className={`${styles['car-index']}`}>
                    <div className={`${styles['image-wrapper']}`}>
                        <img src={car.image} />
                    </div>
                    <div className={`${styles['name-wrapper']}`}>
                        {car.name}
                    </div>
                    <div className={`${styles['price-wrapper']}`}>
                        Giá từ: {car.price}
                    </div>
                </div>
            </div>
        </div>
    </Col>

}

module.exports = CarIndexCard;