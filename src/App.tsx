import React from "react";
import "./App.less";
import { Routes } from "./routes";
function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
          POWERED BY TDC.
        </div>
      </div>
      <Routes />
     
    </div>
  );
}

export default App;
