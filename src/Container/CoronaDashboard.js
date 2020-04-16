import React, { useState } from "react";
import "./CoronaDashboard.scss";
import SideDrawer from "./sideDrawer/SideDrawer";
import Navbar from "./Navbar/Navbar";
import MainArea from "./MainArea/MainArea";
const coronaDashboard = () => {
  return (
    <div className="corna-dashboard">
      <Navbar />
      <SideDrawer />
      <MainArea />
    </div>
  );
};

export default coronaDashboard;
