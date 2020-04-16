import React from "react";
import "./Navbar.scss";
import { Navbar, Row, Col } from "react-bootstrap";
const NavBar = () => {
  return (
    <Row>
      <Col md={12}>
        {" "}
        <Navbar className="nav-bar">
          <Navbar.Brand>
            <h3>Corana Tracker</h3>
          </Navbar.Brand>
        </Navbar>
      </Col>
    </Row>
  );
};

export default NavBar;
