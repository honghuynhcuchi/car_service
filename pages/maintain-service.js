import Head from "next/head";
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../styles/MaintainService.module.css";
const MaintainService = () => {
    return <Fragment>
        <Head>
        <title>Dịch Vụ Bảo Dưỡng</title>
        </Head>
        <Row className="m-0 justify-content-center">
            <Col xs={12} md={6} style={{ margin: 0 }}>
                <div className={styles['maintain-wrapper']}>
                    <div className={styles['section']}>
                        <div className={styles['title']}>
                            Bảo dưỡng ô tô là gì ?
                        </div>
                        <div className={styles['content']}>
                            <div className={styles['main']}>
                                Bảo dưỡng ô tô là hàng loạt các công việc nhất định, bắt buộc phải thực hiện với các loại xe sau một thời gian làm việc hay quãng đường quy định.
                            </div>
                            {/* <div className={styles['sub']}>

                </div> */}
                        </div>
                        <div className={styles['image']}>
                            <img src="/images/maintain/baoduongotolagi.jpg" />
                        </div>
                    </div>
                    <div className={styles['section']}>
                        <div className={styles['title']}>
                            Lợi ích của bảo dưỡng ô tô định kỳ
                        </div>
                        <div className={styles['image']}>
                            <img src="/images/maintain/loiichbaoduongotodichky.jpg" />
                        </div>
                        <div className={styles['content']}>
                            {/* <div className={styles['main']}>
                            Bảo dưỡng ô tô là hàng loạt các công việc nhất định, bắt buộc phải thực hiện với các loại xe sau một thời gian làm việc hay quãng đường quy định.
                        </div> */}
                            <ul className={styles['sub']}>
                                <li>
                                    Bảo hành: Được hưởng chính sách bảo hành chính hãng của Hyundai (3 năm hoặc 100.000 km)
                                </li>
                                <li>
                                    An toàn: Sớm phát hiện và kịp thời sửa chữa những hư hỏng phát sinh hoặc tiềm tàng.
                                </li>
                                <li>
                                    Tiết kiệm:Duy trì hiệu suất động cơ, tiết kiệm nhiên liệu, tiết kiệm chi phí sửa chữa.
                                </li>
                                <li>
                                    Chất lượng: Đảm bảo hệ thống vận hành êm ái và bền bỉ.
                                </li>
                                <li>
                                    An tâm: Giá cả (Phụ tùng và nhân công) minh bạch và được niêm yết trên toàn hệ thống, quy trình dịch vụ chuyên nghiệp.
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className={styles['section']}>
                        <div className={styles['title']}>
                            Nội dung bảo dưỡng xe ô tô
                        </div>
                        <div className={styles['image']}>
                            <img src="/images/maintain/noidungbaoduong.jpg" />
                        </div>
                        <div className={styles['content']}>
                            <div className={styles['main']}>
                                Bao gồm các cấp bảo dưỡng ô tô như sau:
                            </div>
                            <ul className={styles['sub']}>
                                <li>
                                    Bảo dưỡng cho xe ô tô mới mua (Bảo dưỡng xe ô tô 1000km hoặc 01 tháng gần nhất kể từ ngày nhận xe)
                                </li>
                                <li>
                                    Bảo dưỡng cấp 1 (Bảo dưỡng xe ô tô 5000km, 15.000km...)
                                </li>
                                <li>
                                    Bảo dưỡng cấp 2 (Bảo dưỡng xe ô tô 10.000km, 30.00km...)
                                </li>
                                <li>
                                    Bảo dưỡng cấp 3 (Bảo dưỡng xe ô tô 20.000km, 60.000km...)
                                </li>
                                <li>
                                    Bảo dưỡng cấp 4 (Bảo dưỡng xe ô tô 40.000km, 80.000km...)
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className={styles['section']}>
                        <div className={styles['title']}>
                            Bảo dưỡng xe ô tô mất bao lâu ?
                        </div>
                        <div className={styles['image']}>
                            <img src="/images/maintain/baoduongxematbaolau.jpg" />
                        </div>
                        <div className={styles['content']}>
                            <div className={styles['main']}>
                                <span className={styles['note']}>Ghi chú:</span> Thời gian trên là thời gian thực hiện công việc bảo dưỡng xe. Thời gian thực tế có thể thay đổi nếu có công việc phát sinh…
                            </div>
                            <div className={`${styles['main']} mt-3`}>
                                Đặt lịch trước với hãng xe Hyundai để được phục vụ tốt nhất và ưu tiên theo lịch trình: Khi đặt lịch trước, bạn chỉ cần đến đúng giờ hẹn và thời gian bạn phải chờ đợi chỉ còn phụ thuộc vào thời gian bảo dưỡng xe, giúp bạn tiết kiệm được khá nhiều thời gian.
                            </div>

                        </div>

                    </div>
                </div>
            </Col>
        </Row>
    </Fragment>
}

export default MaintainService;