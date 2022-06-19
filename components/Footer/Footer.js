import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import FooterImage from "../../public/images/footer.jpg"
const Footer = () => {
  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer-image"]}>
        <Image src={FooterImage} layout={"responsive"} />
        <div className={styles["content"]}>
          <span className={styles["title"]}>BÁO GIÁ, LÁI THỬ XE, THÔNG TIN VỀ TRẢ GÓP VUI LÒNG LIÊN HỆ SỐ HOLINE SAU:</span>
          <span className={styles["phone"]}>0909.208.916</span>
        </div>
      </div>
      <div className={styles["container"]}>
        <Row>
          <Col md={2} className={styles["footer-section"]}>
            <Link href={"/"}>
              <a>
                <img src="/images/logo_white.png" />
              </a>
            </Link>
          </Col>
          <Col md={2} className={styles["footer-section"]}>
            <div className={styles["content-wrapper"]}>
              <Link href="/">
                <a>
                  <h5 className={styles["content"]}>Giới thiệu</h5>
                </a>
              </Link>
              <Link href="/booking">
                <a>
                  <h5 className={styles["content"]}>Đặt lịch hẹn</h5>
                </a>
              </Link>
              <Link href="/business">
                <a>
                  <h5 className={styles["content"]}>Quy trình dịch vụ</h5>
                </a>
              </Link>
              <Link href="/maintain-service">
                <a>
                  <h5 className={styles["content"]}>Dịch vụ bảo dưỡng</h5>
                </a>
              </Link>
              <Link href="/car-parts">
                <a>
                  <h5 className={styles["content"]}>Bảng giá phụ tùng</h5>
                </a>
              </Link>
              <Link href="/price-maintain/1">
                <a>
                  <h5 className={styles["content"]}>Bảng giá bảo dưỡng</h5>
                </a>
              </Link>

            </div>
          </Col>
        
          <Col md={8} className={styles["footer-section"]}>
            <div className={styles["content-wrapper"]}>
              <h5 className={styles["content"]}>Liên hệ với chúng tôi</h5>
              <div>
                <span className={styles["sub-content"]}>
                  Hotline Tư Vấn Dịch Vụ: 0909.208.916
                </span>
              </div>
              <div>
                <span className={styles["sub-content"]}>
                  CSKH: 028.7300.9909
                </span>
              </div>
              <div>
                <span className={styles["sub-content"]}>
                  Trụ sở chính: 409 Nguyễn Văn Bá, P. Trường Thọ, Tp. Thủ Đức,
                  HCM
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
