import Image from "next/image";
import { Col } from "react-bootstrap";
import styles from "./Part.module.css";
const Part = ({ part }) => {
    return <Col className={`${styles['part-wrapper']} p-3`} md="6" lg="3"> 
        <div className={`${styles['part']}`}>
            <div className={`${styles['image-wrapper']}`}>
                <Image src={part.image} layout="responsive" />
            </div>
            <div className={`${styles['name-wrapper']}`}>
                {part.name}
            </div>
            <div className={`${styles['price-wrapper']}`}>
                {part.price}
                <span className={styles['currency']}>đ</span>
            </div>
        </div>
    </Col>
}

export default Part;