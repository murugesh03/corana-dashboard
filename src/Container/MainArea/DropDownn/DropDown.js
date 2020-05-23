import React from "react";
import { Form } from "react-bootstrap";

const DropDown = () => {
  return (
    <Form style={{ textAlign: "center" }}>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label style={{ padding: "0 1rem  ", color: "white" }}>
          Country
        </Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default DropDown;
