import React from "react";
import "./MainArea.scss";
// import Navbar from "../Navbar/Navbar";
import Card from "./Card/Card";
import Graph from "./Graph/Graph";
import { Row, Col } from "react-bootstrap";
const MainArea = () => {
  return (
    <Row className="main-area">
      <Col md={12}>
        <Card />
      </Col>

      <Col md={12}>
        <Graph />
      </Col>
    </Row>
  );
};

export default MainArea;
