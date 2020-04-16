import React from "react";
import "./MainArea.scss";
import Navbar from "../Navbar/Navbar";
import Card from "./Card/Card";
import { Row, Col } from "react-bootstrap";
const MainArea = () => {
  return (
    <Row  className="main-area">
        <Col md={8}>
      <Card />
      </Col>
    </Row>
  );
};

export default MainArea;
