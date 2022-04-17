import styles from "./Banner.module.css";
const Banner = ({title}) => {
    return <div className={`${styles['banner']}`}>
        <h6 className={`${styles['title']}`}>
        {title}
        </h6>
    </div>
}
export default Banner;