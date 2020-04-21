import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { CoranaConsumer } from "../../../../Context";

const Affected = () => {
  return (
    <Fragment>
      <CoranaConsumer>
        {(track) => {
          return (
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Header className="card-individual-content-header">
                Confirmed
              </Card.Header>
              <Card.Body>
                <Card.Text className="card-individual-content-text">
                  {track.confirmed}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        }}
      </CoranaConsumer>
    </Fragment>
  );
};

export default Affected;
