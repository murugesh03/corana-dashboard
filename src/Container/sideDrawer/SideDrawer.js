import React from "react";
import "./SideDrawer.scss";
import { Row, Col } from "react-bootstrap";
const SideDrawer = () => {
  return (
    <Row className="side-drawer">
      <Col md={4}>
        <ul>
          <li>Dashboard</li>
          <li>Symptoms</li>
          <li>Prevention</li>
          <li>Treatments</li>
        </ul>
      </Col>
    </Row>
  );
};

export default SideDrawer;
