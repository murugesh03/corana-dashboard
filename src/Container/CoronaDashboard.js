import React from "react";
import "./CoronaDashboard.scss";
import SideDrawer from "./sideDrawer/SideDrawer";
import Navbar from "./Navbar/Navbar";
import MainArea from "./MainArea/MainArea";
import Prevention from "./Prevention/Prevention";
import Treatments from "./Treatments/Treatments";
import Symptoms from "./Symptoms/Symptoms";

import { Switch, Route } from "react-router-dom";
const coronaDashboard = () => {
  return (
    <div className="corna-dashboard">
      <Navbar />
      <SideDrawer />
      <Switch>
        <Route exact path="/" component={MainArea} />
        <Route exact path="/symptoms" component={Symptoms} />
        <Route exact path="/prevention" component={Prevention} />
        <Route exact path="/treatments" component={Treatments} />
      </Switch>
    </div>
  );
};

export default coronaDashboard;
