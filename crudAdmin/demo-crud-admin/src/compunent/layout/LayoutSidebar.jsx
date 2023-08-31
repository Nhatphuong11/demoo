import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./LayoutSidebar.css"
import { Link } from "react-router-dom";

function LayoutSidebar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={"/"}><img style={{width:"300px"}} src="https://image-us.eva.vn/upload/3-2022/images/2022-08-10/img-social-uploadbtv-untitled-2-1660097402-371-width1200height628-1660097402-50-width1200height628-watermark.jpg"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to={"/dashboard"}>Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={"/users"}>Users</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={"/products"}>Product</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LayoutSidebar;