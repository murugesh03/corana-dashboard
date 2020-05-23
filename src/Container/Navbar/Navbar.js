import React from "react";
import "./Navbar.scss";
import { Row, Col } from "react-bootstrap";
const NavBar = () => {
  return (
    <Row>
      <Col md={12}>
        <div className="nav-bar">
          <h3>Corona Tracker</h3>
        </div>
      </Col>
    </Row>
  );
};

export default NavBar;
