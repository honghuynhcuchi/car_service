import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Business.module.css";
const BusinessCollapseContent = ({ content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Col xl={12}>
      <Row className="flex-row row-center">
        <Col
          md={8}
          xl={6}
          className={`${styles["collapse-item-container"]} ${className}`}
        >
          <div
            className={styles["collapse-open-item"]}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{content.title}</span>
            <span
              className={`${styles["arrow"]} ${
                styles[isOpen === true ? "open" : "close"]
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </div>
          <div
            className={`${styles["collapse-content-item"]} ${
              styles[isOpen === true ? "open" : "close"]
            }`}
            id="b1"
          >
            <ul className={styles["first-content"]}>
              {content.main_content.map((main_content, index) => {
                return (
                  <li key={`c-${index}`}>
                    {main_content.content}
                    {main_content.sub_content && (
                      <ul className={styles["second-content"]}>
                        {main_content.sub_content.map((sub_content, index) => (
                          <li key={`d-${index}`}>{sub_content}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className={styles["image-container"]}>
              <img src={content.image} />
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default BusinessCollapseContent;
