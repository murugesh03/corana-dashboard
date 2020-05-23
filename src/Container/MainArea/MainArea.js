import React from "react";
import Card from "./Card/Card";
import Graph from "./Graph/Graph";
import { Row, Col, Container } from "react-bootstrap";
import DropDown from "./DropDownn/DropDown";
import NavBar from "../Navbar/Navbar";
const MainArea = () => {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>

      <Row>
        <Col>
          <Card />
        </Col>
      </Row>
      <Row>
        <Col>
          <DropDown />
        </Col>
        <Col>
          <Graph />
        </Col>
      </Row>
    </Container>
  );
};

export default MainArea;
