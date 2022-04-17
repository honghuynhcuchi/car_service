import Image from "next/image";
import styles from "./CarCard.module.css";
const CarCard = ({ car }) => {
    return <div className={`${styles['car-card']}`}>
        <div className={`${styles['image-wrapper']}`}>
            <Image src={car.image} layout="responsive"/>
        </div>
        <div className={`${styles['name-wrapper']}`}>
            {car.name}
        </div>
    </div>



}
export default CarCard;