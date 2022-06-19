import { useState, useEffect, useContext } from "react";


import { useRouter } from "next/router";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styled from "styled-components";
import { HeaderStyled } from "./HeaderStyled";
import { AppContext } from "../../pages/_app";
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
    url: "/car-parts",
    title: "BẢNG GIÁ PHỤ TÙNG"
  },
  {
    url: "/price-maintain",
    title: "BẢNG GIÁ BẢO DƯỠNG"
  }
];


const CustomNavBar = styled(Navbar)`
  background-color: transparent;
  box-shadow: none;
  margin-top: auto;
  .nav-link{
    color: #FFFFFF !important;
  }
  .nav-link.active{
      text-decoration: underline;
  }
  &.fixed-navbar{
    margin-left: auto;
    margin-right: auto;
   
    .nav-link{
      color:black !important;
    }
    .nav-link.active{
      text-decoration: underline;
  }
    
    
    
  }

  @media screen and (max-width:768px){
    padding-left: 10px;
    &.fixed-navbar{
      margin-right: 0;
    }
  }
  @media screen and (max-width:992px){
    .nav-item{
      font-size: 14px !important;
    }
  }
  
`




const Header = () => {
  const [isShowBottomMenu, setIsShowBottomMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();
  const { isFarHeader, headerHeight } = useContext(AppContext);
  useEffect(() => {
    setCurrentPath(router.pathname);
    return () => { };
  }, [router]);



  return (
    <>
      <HeaderStyled>


        <div className={`header-content ${isFarHeader === true ? "fixed-header" : ""}`}>
          <div className="top-header">
            <div className="logo">
              <Link href={"/"}>
                <a>
                  <img src="/images/logo.png" />
                </a>
              </Link>
            </div>
            <div className="label">
              CHUYỂN ĐỔI SỐ TRONG QUẢN LÝ DỊCH VỤ Ô TÔ
            </div>
          </div>
          <CustomNavBar expand="md" className={`${isFarHeader === true ? "fixed-navbar" : ""}`}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#FFFFFF" }} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex w-100 justify-content-center" style={{fontSize:"16px"}}>
                <Nav.Link href="/">GIỚI THIỆU</Nav.Link>
                <Nav.Link href="/booking">ĐẶT LỊCH HẸN</Nav.Link>
                <NavDropdown title="DỊCH VỤ" id="dichvu-nav-dropdown">
                  <NavDropdown.Item href="/business">QUY TRÌNH DỊCH VỤ</NavDropdown.Item>
                  <NavDropdown.Item href="/maintain-service">DỊCH VỤ BẢO DƯỠNG</NavDropdown.Item>
                  
                </NavDropdown>
                <Nav.Link href="/car-parts">BẢNG GIÁ PHỤ TÙNG</Nav.Link>
                <NavDropdown title="BẢNG GIÁ BẢO DƯỠNG" id="banggia-baoduong-nav-dropdown">
                  <NavDropdown.Item href="/price-maintain/1">BẢO DƯỠNG CẤP 1</NavDropdown.Item>
                  <NavDropdown.Item href="/price-maintain/2">BẢO DƯỠNG CẤP 2</NavDropdown.Item>
                  <NavDropdown.Item href="/price-maintain/3">BẢO DƯỠNG CẤP 3</NavDropdown.Item>
                  <NavDropdown.Item href="/price-maintain/4">BẢO DƯỠNG CẤP 4</NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </CustomNavBar>
        </div>

      </HeaderStyled>

    </>
  );
};

export default Header;
