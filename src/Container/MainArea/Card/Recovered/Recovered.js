import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { CoranaConsumer } from "../../../../Context";

const Recovered = () => {
  return (
    <Fragment>
      {" "}
      <CoranaConsumer>
        {(track) => {
          return (
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
                  {track.recovered}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        }}
      </CoranaConsumer>
    </Fragment>
  );
};

export default Recovered;
