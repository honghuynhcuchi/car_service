import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import styles from "../styles/Booking.module.css";
import axios from "axios";
const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSendMail = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);
    const keys = [
      "fullname",
      "phone",
      "car-type",
      "km-number",
      "license-plate",
      "service-type",
      "date-go",
      "time-go",
    ];
    let data = { type: "booking" };
    keys.forEach((key) => {
      data = {
        ...data,
        [key]: e.target[key].value,
      };
    });
    axios
      .request({
        method: "POST",
        data: data,
        url: "/api/send-mail",
        
      })
      .then((res) => {
        let data = res.data;
        setSuccessMessage("Đặt lịch hẹn thành công, chúng tôi sẽ sớm liên hệ lại với bạn");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Đã có lỗi trong quá trình đặt cuộc hẹn, vui lòng thử lại");
      })
      .finally(() => {
        setLoading(false);
      })
  };

  return (
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
              Hãy điền thông tin vào biểu mẫu dưới đây để đặt lịch hẹn với chúng
              tôi
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
                <label htmlFor="car-type" className={styles["label"]}>
                  Loại xe <span className={styles["require"]}>*</span>
                </label>
                <div className={styles["input-wrapper"]}>
                  <input
                    id="car-type"
                    name="car-type"
                    required
                    type={"text"}
                    placeholder="VD: Hyundai accent"
                  />
                </div>
              </div>

              <div className={styles["row-input"]}>
                <label htmlFor="km-number" className={styles["label"]}>
                  Số Km <span className={styles["require"]}>*</span>
                </label>
                <div className={styles["input-wrapper"]}>
                  <input
                    id="km-number"
                    name="km-number"
                    required
                    type={"text"}
                    placeholder="VD: 123"
                  />
                </div>
              </div>

              <div className={styles["row-input"]}>
                <label htmlFor="license-plate" className={styles["label"]}>
                  Biển kiểm soát<span className={styles["require"]}>*</span>
                </label>
                <div className={styles["input-wrapper"]}>
                  <input
                    id="license-plate"
                    name="license-plate"
                    required
                    type={"text"}
                    placeholder="VD: 80-LA 0504"
                  />
                </div>
              </div>

              <div className={styles["row-input"]}>
                <label htmlFor="service-type" className={styles["label"]}>
                  Loại dịch vụ<span className={styles["require"]}>*</span>
                </label>
                <div className={styles["select-wrapper"]}>
                  <select id="service-type" name="service-type">
                    <option value="Sửa chữa">Sửa chữa</option>
                    <option value="Bảo dưỡng">Bảo dưỡng</option>
                    <option value="Bảo hành">Bảo hành</option>
                    <option value="Đồng sơn">Đồng sơn</option>
                  </select>
                </div>
              </div>
              <p style={{ color: "#1f2674", fontWeight: "bold" }}>
                Thời gian quý khách dự kiến đến cửa hàng:
              </p>

              <div className={styles["row-input"]}>
                <label htmlFor="date-go" className={styles["label"]}>
                  Ngày/tháng/năm<span className={styles["require"]}>*</span>
                </label>
                <div className={styles["input-wrapper"]}>
                  <input
                    id="date-go"
                    name="date-go"
                    required
                    placeholder="dd/mm/yyyy"
                    pattern="\d{1,2}/\d{1,2}/\d{4}"
                  />
                </div>
              </div>
              <div className={styles["row-input"]}>
                <label htmlFor="time-go" className={styles["label"]}>
                  Vào lúc<span className={styles["require"]}>*</span>
                </label>
                <div className={styles["select-wrapper"]}>
                  <select id="time-go" name="time-go">
                    <option value="8:00 - 9:00">8:00 - 9:00</option>
                    <option value="9:00 - 10:00">9:00 - 10:00</option>
                    <option value="10:00 - 11:00">10:00 - 11:00</option>
                    <option value="13:00 - 14:00">13:00 - 14:00</option>
                    <option value="14:00 - 15:00">14:00 - 15:00</option>
                    <option value="15:00 - 16:00">15:00 - 16:00</option>
                  </select>
                </div>
              </div>
              {successMessage && <p style={{textAlign:"center", color:"green", fontWeight:"bold"}}>{successMessage}</p>}
              {errorMessage && <p style={{textAlign:"center", color:"red"}}>{errorMessage}</p>}
              <div className={styles["action-wrapper"]}>
                <button
                  type="submit"
                  className="primary-button w-sm-100 w-md-50"
                  disabled={loading}
                >
                  {loading === true && (
                    <div class="spinner-border text-light" role="status">
                      <span class="sr-only">Loading...</span>
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
  );
};

export default Booking;
