import React from "react";
import "./App.css";
import Dashboard from "./Container/CoronaDashboard";
import { CoranaProvider } from "./Context";
function App() {
  return (
    <CoranaProvider>
      <div className="App">
        <Dashboard />
      </div>
    </CoranaProvider>
  );
}

export default App;
