import React from "react";
import "./Card.scss";
import { Card } from "react-bootstrap";
const CardView = () => {
  return (
    <div className="card">
      <div className="container">
        <div className=" card-individual">
          <Card
            className="card-individual-content"
            border="primary"
            style={{ width: "18rem" }}
          >
            <Card.Header className="card-individual-content-header">
              Affected
            </Card.Header>
            <Card.Body>
              <Card.Text className="card-individual-content-text">
                1500
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="card-individual-content"
            border="primary"
            style={{ width: "18rem" }}
          >
            <Card.Header className="card-individual-content-header">
              Recoverd
            </Card.Header>
            <Card.Body>
              <Card.Text className="card-individual-content-text">
                1000
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="card-individual-content"
            border="primary"
            style={{ width: "18rem" }}
          >
            <Card.Header className="card-individual-content-header">
              Death
            </Card.Header>
            <Card.Body>
              <Card.Text className="card-individual-content-text">
                500
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardView;
