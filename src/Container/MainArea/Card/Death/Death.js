import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { CoranaConsumer } from "../../../../Context";

const Death = () => {
  return (
    <Fragment>
      <CoranaConsumer>
        {(track) => {
          return (
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
                  {track.deaths}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        }}
      </CoranaConsumer>
    </Fragment>
  );
};

export default Death;
