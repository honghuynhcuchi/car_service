import { useState, useEffect } from "react";
import styles from "./Header.module.css";

import { useRouter } from "next/router";

import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const links = [
  {
    url: "/",
    title: "GIỚI THIỆU",
  },
  {
    url: "/booking",
    title: "ĐẶT LỊCH HẸN",
  },
  {
    url: "/business",
    title: "QUY TRÌNH DỊCH VỤ",
  },
  {
    url:"/car-parts",
    title:"BẢNG GIÁ PHỤ TÙNG"
  }
];

const Header = () => {
  const [isShowBottomMenu, setIsShowBottomMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  useEffect(() => {
    setCurrentPath(router.pathname);
    return () => {};
  }, [router]);

  return (
    <div className={styles["header"]}>
      <div className={styles["left"]}>
        <Link href={"/"}>
          <a>
            <div className={styles["logo-container"]}>
              <img src="/images/logo.png" />
            </div>
          </a>
        </Link>
        <div className={styles["label-wrapper"]}>
          <h5 className={styles["label"]}>
            CHUYỂN ĐỔI SỐ TRONG QUẢN LÝ DỊCH VỤ Ô TÔ
          </h5>
        </div>
      </div>
      <div>
        <Navbar
          className={`${styles["nav-bar"]} ${styles["navbar-light"]}`}
          expand="lg"
        >
          <button
            type="button"
            className={`btn btn-outline-secondary ${styles["toggle-menu-button"]}`}
            onClick={() => setIsShowBottomMenu(!isShowBottomMenu)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className={`${styles["navbar-nav"]} me-auto`}>
              {links.map((item) => (
                <Nav.Link
                  key={item.url}
                  className={`${styles["nav-link"]}  ${
                    item.url === currentPath ? styles["active"] : ""
                  }`}
                  href={item.url}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {isShowBottomMenu == true && (
        <div className={styles["bottom-nav-wrapper"]}>
          <Navbar className={styles["nav-bar"]}>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className={`${styles["navbar-nav"]} me-auto`}>
                {links.map((item) => (
                  <Nav.Link
                    key={item.url + "bottom"}
                    className={`${styles["nav-link"]}  ${
                      item.url === currentPath ? styles["active"] : ""
                    }`}
                    href={item.url}
                  >
                    {item.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )}
    </div>
  );
};

export default Header;
