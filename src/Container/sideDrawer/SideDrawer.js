import React from "react";
import "./SideDrawer.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const SideDrawer = () => {
  return (
    <Row className="side-drawer">
      <Col md={4}>
        <ul>
          <Link to="/">
            <li>Dashboard</li>
          </Link>
          <Link to="/symptoms">
            <li>Symptoms</li>
          </Link>
          <Link to="/prevention">
            <li>Prevention</li>
          </Link>
          <Link to="/treatments">
            <li>Treatments</li>
          </Link>
        </ul>
      </Col>
    </Row>
  );
};

export default SideDrawer;
