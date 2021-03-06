import { Fragment, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import styles from "../styles/Booking.module.css";
import axios from "axios";
import emailjs from '@emailjs/browser';
import Head from "next/head";
import moment from "moment";
const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSendMail = (e) => {
    e.preventDefault();
    console.log(e.target);
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);
    const keys = [
      "fullname",
      "phone",
      "car_type",
      "km_number",
      "license_plate",
      "service_type",
      "date_go",
      "time_go",
    ];
    let data = { type: "booking" };
    keys.forEach((key) => {
      data = {
        ...data,
        [key]: e.target[key].value,
        createdAt : moment(new Date()).format("LT - DD/MM/YYYY"),

      };
    });
    emailjs.send('service_2tda4yl', 'template_v53sz21', data,"oDoZjc3NiW0430V_E")
      .then((result) => {
       
        setSuccessMessage(
          "Đặt lịch hẹn thành công, chúng tôi sẽ sớm liên hệ lại với bạn"
        );
        e.target.reset();
      }, (err) => {
        console.log(err);
        setErrorMessage(
          "Đã có lỗi trong quá trình đặt cuộc hẹn, vui lòng thử lại"
        );
      })
      .finally(()=>{
        setLoading(false);
      });
    // axios
    //   .request({
    //     method: "POST",
    //     data: data,
    //     url: "/api/send-mail",
    //   })
    //   .then((res) => {
    //     let data = res.data;
    //     setSuccessMessage(
    //       "Đặt lịch hẹn thành công, chúng tôi sẽ sớm liên hệ lại với bạn"
    //     );
    //     e.target.reset();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setErrorMessage(
    //       "Đã có lỗi trong quá trình đặt cuộc hẹn, vui lòng thử lại"
    //     );
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return (
  
    <Fragment>
        <Head>
        <title>Đặt Lịch Hẹn</title>
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "2rem 0",
          }}
        >
          <Col xs={12} md={6}>
            <div className={styles["form-wrapper"]}>
              <h3 className={styles["form-title"]}>Biểu mẫu đặt lịch hẹn</h3>
              <p className={styles["form-description"]}>
                Hãy điền thông tin vào biểu mẫu dưới đây để đặt lịch hẹn với
                chúng tôi
              </p>
              <br />
              <Form onSubmit={handleSendMail}>
                <div className={styles["row-input"]}>
                  <label htmlFor="fullname" className={styles["label"]}>
                    Họ {"&"} Tên <span className={styles["require"]}>*</span>
                  </label>
                  <div className={styles["input-wrapper"]}>
                    <input
                      id="fullname"
                      name="fullname"
                      required
                      type={"text"}
                      placeholder="VD: Nguyễn Văn A"
                    />
                  </div>
                </div>

                <div className={styles["row-input"]}>
                  <label htmlFor="phone" className={styles["label"]}>
                    Số điện thoại <span className={styles["require"]}>*</span>
                  </label>
                  <div className={styles["input-wrapper"]}>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type={"text"}
                      placeholder="VD: 09xxx"
                    />
                  </div>
                </div>

                <div className={styles["row-input"]}>
                  <label htmlFor="car_type" className={styles["label"]}>
                    Loại xe <span className={styles["require"]}>*</span>
                  </label>
                  <div className={styles["input-wrapper"]}>
                    <input
                      id="car_type"
                      name="car_type"
                      required
                      type={"text"}
                      placeholder="VD: Hyundai accent"
                    />
                  </div>
                </div>

                <div className={styles["row-input"]}>
                  <label htmlFor="km_number" className={styles["label"]}>
                    Số Km <span className={styles["require"]}>*</span>
                  </label>
                  <div className={styles["input-wrapper"]}>
                    <input
                      id="km_number"
                      name="km_number"
                      required
                      type={"text"}
                      placeholder="VD: 123"
                    />
                  </div>
                </div>

                <div className={styles["row-input"]}>
                  <label htmlFor="license_plate" className={styles["label"]}>
                    Biển kiểm soát<span className={styles["require"]}>*</span>
                  </label>
                  <div className={styles["input-wrapper"]}>
                    <input
                      id="license_plate"
                      name="license_plate"
                      required
                      type={"text"}
                      placeholder="VD: 80-LA 0504"
                    />
                  </div>
                </div>

                <div className={styles["row-input"]}>
                  <label htmlFor="service_type" className={styles["label"]}>
                    Loại dịch vụ<span className={styles["require"]}>*</span>
                  </label>
                  <div className={styles["select-wrapper"]}>
                    <select id="service_type" name="service_type">
                      <option value="Sửa chữa">Sửa chữa</option>
                      <option value="Bảo dưỡng">Bảo dưỡng</option>
                      <option value="Bảo hành">Bảo hành</option>
                      <option value="Đồng sơn">Đồng sơn</option>
                    </select>
                  </div>
                </div>
                <p style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  Thời gian quý khách dự kiến đến cửa hàng:
                </p>

                <div className={styles["row-input"]}>
                  <label htmlFor="date_go" className={styles["label"]}>
                    Ngày/tháng/năm<span className={styles["require"]}>*</span>
                  </label>
                  <div className={styles["input-wrapper"]}>
                    <input
                      id="date_go"
                      name="date_go"
                      required
                      placeholder="dd/mm/yyyy"
                      pattern="\d{1,2}/\d{1,2}/\d{4}"
                    />
                  </div>
                </div>
                <div className={styles["row-input"]}>
                  <label htmlFor="time_go" className={styles["label"]}>
                    Vào lúc<span className={styles["require"]}>*</span>
                  </label>
                  <div className={styles["select-wrapper"]}>
                    <select id="time_go" name="time_go">
                      <option value="8:00 - 9:00">8:00 - 9:00</option>
                      <option value="9:00 - 10:00">9:00 - 10:00</option>
                      <option value="10:00 - 11:00">10:00 - 11:00</option>
                      <option value="13:00 - 14:00">13:00 - 14:00</option>
                      <option value="14:00 - 15:00">14:00 - 15:00</option>
                      <option value="15:00 - 16:00">15:00 - 16:00</option>
                    </select>
                  </div>
                </div>
                {successMessage && (
                  <p
                    style={{
                      textAlign: "center",
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p style={{ textAlign: "center", color: "red" }}>
                    {errorMessage}
                  </p>
                )}
                <div className={styles["action-wrapper"]}>
                  <button
                    type="submit"
                    className="primary-button w-sm-100 w-md-50"
                    disabled={loading}
                  >
                    {loading === true && (
                      <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                    {loading === false && "Đặt Lịch Hẹn"}
                  </button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Booking;
