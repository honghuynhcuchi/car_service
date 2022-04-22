import Image from "next/image";
import Link from "next/link";
import styles from "./CarCard.module.css";
const CarCard = ({ car }) => {
    return <Link href={"/car-parts/"+car._id}>
        <div className={`${styles['car-card']}`}>
            <div className={`${styles['image-wrapper']}`}>
                <Image src={car.image} layout="responsive" />
            </div>
            <div className={`${styles['name-wrapper']}`}>
                {car.name}
            </div>
        </div>
    </Link>



}
export default CarCard;