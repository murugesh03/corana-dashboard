import React from "react";
import "./App.css";
import Dashboard from "./Container/CoronaDashboard";
import { CoranaProvider } from "./Context";
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <CoranaProvider>
      <Router>
        <Dashboard />
      </Router>
    </CoranaProvider>
  );
}

export default App;
