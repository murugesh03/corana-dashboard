import React from "react";
import "./Card.scss";
import Affected from "./Affected/Affected";
import Recovered from "./Recovered/Recovered";
import Death from "./Death/Death";
// import { CoranaConsumer } from "../../../Context";

const CardView = () => {
  return (
    <div className="card">
      <div className="container">
        <div className=" card-individual">
          <Affected />
          <Recovered />
          <Death />
        </div>
      </div>
    </div>
  );
};

export default CardView;
