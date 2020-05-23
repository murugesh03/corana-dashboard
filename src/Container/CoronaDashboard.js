import React, { Fragment } from "react";
import "./CoronaDashboard.scss";
import SideDrawer from "./sideDrawer/SideDrawer";
import MainArea from "./MainArea/MainArea";
import Prevention from "./Prevention/Prevention";
import Treatments from "./Treatments/Treatments";
import Symptoms from "./Symptoms/Symptoms";
import { Switch, Route } from "react-router-dom";
const CoronaDashboard = () => {
  return (
    <div className="corona-dashboard">
      <SideDrawer />
      <Switch>
        <Fragment>
          <div className="main-area">
            <Route exact path="/" component={MainArea} />
            <Route path="/symptoms" component={Symptoms} />
            <Route path="/prevention" component={Prevention} />
            <Route path="/treatments" component={Treatments} />
          </div>
        </Fragment>
      </Switch>
    </div>
  );
};

export default CoronaDashboard;
