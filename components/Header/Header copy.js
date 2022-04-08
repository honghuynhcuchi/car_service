import { useState } from "react";
import styles from "./Header.module.css";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["label-wrapper"]}>
        <h5 className={styles["label"]}>
          CHUYỂN ĐỔI SỐ TRONG QUẢN LÝ DỊCH VỤ Ô TÔ
        </h5>
      </div>

      <div className={`${styles["nav-bar-wrapper"]} row` }>
        <div className="col-12">
          <Navbar className={styles["nav-bar"]} expand="lg">
       
              <Navbar.Brand href="#home">
                <img className={styles["logo"]} src="/images/logo.jpg" />
              </Navbar.Brand>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className={`${styles['navbar-nav']} me-auto`}>
                  <Nav.Link className={styles['nav-link']} href="#home">GIỚI THIỆU</Nav.Link>
                  <Nav.Link className={styles['nav-link']} href="#link">ĐẶT LỊCH HẸN</Nav.Link>
                  <Nav.Link className={styles['nav-link']} href="#link">QUY TRÌNH DỊCH VỤ</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
