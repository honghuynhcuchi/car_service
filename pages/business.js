import { Col, Row } from "react-bootstrap";

import styles from "../styles/Business.module.css";
import BusinessCollapseContent from "../components/Business/BusinessCollapseContent";
import Head from "next/head";
import { Fragment } from "react";

const CONTENTS = [
  {
    title: "Bước 1: Đặt hẹn.",
    main_content: [
      {
        content:
          "Nhằm để cả hai bên đại lý và khách hàng cùng lên kế hoạch chuẩn bị trước các điều kiện cần thiết cho việc tiến hành dịch vụ đã thỏa thuận.",
      },
      {
        content: "Quy trình:",
        sub_content: [
          "Chăm sóc khách hàng (CSKH) hoặc Cố vấn Dịch vụ (CVDV) gọi điện chăm sóc, thăm hỏi tình trạng sử dụng xe và tiếp nhận nhu cầu của khách hàng. Khuyến khách hàng gọi điện đến đặt hẹn trước để được ưu tiên phục vụ và nhận được nhiều ưu đãi.",
          "CSKH hoặc CVDV tiếp nhận thông tin sau đó lên lịch hẹn cho khách hàng để tránh bị trùng lặp, thiếu vật tư, phụ tùng hoặc kỹ thuật viên.",
        ],
      },
    ],
    image: "/images/b1.jpg",
  },
  {
    title: "Bước 2: Chuẩn Bị Hẹn.",
    main_content: [
      {
        content:
          "Nhằm mục đích lên kế hoạch thực hiện công việc đã hẹn, giảm thiểu lượng khách hàng đã hẹn nhưng không tới.",
      },
      {
        content: "Quy trình:",
        sub_content: [
          "CVDV tiếp nhận thông tin và yêu cầu của khách hàng để lên lịch tiếp nhận vào xưởng.",
          "Kiểm tra lịch sử sửa chữa của xe, lên phương án bảo dưỡng, sửa chữa và vật tư phụ tùng dựa trên thông tin từ khách hàng.",
          "Thông báo và sắp xếp Kỹ thuật viên về thông tin, yêu cầu của khách hàng.",
        ],
      },
    ],
    image: "/images/b2.jpg",
  },
  {
    title: "Bước 3: Tiếp Nhận, Tư Vấn.",
    main_content: [
      {
        content: "Mục đích:",
        sub_content: [
          "Đón tiếp khách hàng mang xe tới đại lý.",
          "Kiểm tra tình trạng thực tế của xe.",
          "Tư vấn giải thích mọi công việc.",
          "Thống nhất các hạng mục theo yêu cầu của khách hàng và báo giá.",
        ],
      },
      {
        content: "Quy trình:",
        sub_content: [
          "CVDV tiếp nhận xe và khách hàng tại xưởng, sau đó lắng nghe ý kiến của khách hàng về tình trạng xe, đưa ra các lời khuyên và phương án xử lý.",
          "Chuẩn bị trang thiết bị, máy móc để chuẩn đoán,kiểm tra tổng quát xe, sau đó quyết định các công việc phải tiến hành thực hiện.",
          "Ước tính chi phí, và thời gian sửa chữa, bảo dưỡng rồi thông báo đến khách hàng.",
          "Khách hàng đồng ý, xác nhận vào phiếu báo giá và lệnh sửa chữa thì tiến hành bước tiếp theo.",
        ],
      },
    ],
    image: "/images/b3.jpg",
  },
  {
    title: "Bước 4: Theo Dõi, Sửa Chữa.",
    main_content: [
      {
        content: "Mục đích:",
        sub_content: [
          "Thực hiện các hạng mục dịch vụ đã thống nhất với khách hàng theo như báo giá và LSC.",
          "Đảm bảo các hạng mục công việc được thực hiện đủ cả về số lượng, chất lượng và thời gian.",
          "Đảm bảo chất lượng dịch vụ và sự hài lòng của khách hàng.",
          "Phát hiện kịp thời và nhanh chóng xử lý các hạng mục phát sinh.",
          "Cập nhật kịp thời các thông tin tiến độ sửa chữa.",
        ],
      },
      {
        content: "Quy trình:",
        sub_content: [
          "Cập nhật kịp thời các thông tin tiến độ sửa chữa.",
          "Kiểm tra, rà soát tiến độ thực hiện công việc và thường xuyên thông tin đến khách hàng.",
          "Trong quá trình thực hiện, nếu có vấn đề phát sinh thì phải thông báo đến khách hàng. Giải thích các công việc và chi phí phát sinh (nếu có) để khách hàng hiểu. Khách hàng đồng ý mới tiến hành thực hiện.",
        ],
      },
    ],
    image: "/images/b4.jpg",
  },
  {
    title: "Bước 5: Giao Xe.",
    main_content: [
      {
        content: "Mục đích:",
        sub_content: [
          "Giải thích cho khách hàng các hạng mục đã tiến hành.",
          "Tư vấn thêm các hạng mục cần thiết khác, các hạng mục cần làm sớm.",
          "Nâng cao sự hài lòng của khách hàng và hình ảnh của đại lý.",
        ],
      },
      {
        content: "Quy trình:",
        sub_content: [
          "CVDV và Quản đốc kiểm tra lại toàn bộ các công việc, hạng mục đã thực hiện.",
          "Hoàn tất các thủ tục, giấy tờ liên quan đến thanh toán chi phí (nếu có).",
          "CVDV hướng dẫn, giải thích lại với KH các công việc đã thực hiện.",
          "Cung cấp các thông tin hữu ích đến khách hàng.",
        ],
      },
    ],
    image: "/images/b5.jpg",
  },
  {
    title: "Bước 6: Theo Dõi Sau Dịch Vụ.",
    main_content: [
      {
        content: "Mục đích:",
        sub_content: [
          "Nhằm cảm ơn khách hàng đã sử dụng địch vụ tại đại lý và ghi nhận những đóng góp, phản hồi từ khách hàng.",
          "Kịp thời phát hiện các vấn đề phát sinh sau sửa chữa hoặc những vấn đề mà khách hàng đang quan tâm.",
          "Tìm hiểu sự hài lòng của khách hàng sau khi thực hiện dịch vụ.",
          "Cập nhật thông tin khách hàng sau một thời gian không làm dịch vụ.",
        ],
      },
      {
        content: "Quy trình:",
        sub_content: [
          "CSKH hoặc CVDV sẽ gọi điện, nhắn tin chăm sóc, thăm hỏi tình trạng xe sau khi khách hàng sử dụng dịch vụ tại Hyundai Đông Sài Gòn. Trong một số trường hợp, CSKH sẽ tiến hành khảo sát sự hài lòng của KH về chất lượng dịch vụ, kỹ năng làm việc của CVDV và kỹ thuật viên. Điều này sẽ góp phần giúp công ty hoàn thiện và nâng cao hơn nữa chất lượng sản phẩm, dịch vụ của mình.",
        ],
      },
    ],
    image: "/images/b6.jpg",
  },
];

const Business = () => {
  return (
    <Fragment>
      <Head>
        <title>Quy Trình Dịch Vụ</title>
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
          <Col xl="12">
            <Row className="flex-row row-center">
              <Col md={8} xl={6} className={styles["image-container"]}>
                <img src="/images/business_overview.jpg" />
              </Col>
            </Row>
          </Col>
          {CONTENTS.map((item, index) => (
            <BusinessCollapseContent content={item} key={`b-${index}`} />
          ))}
        </Row>
      </div>
    </Fragment>
  );
};

export default Business;
