import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
          Swap is audited By SOLANA.
        </div>
      </div>
      <Routes />
     
    </div>
  );
}

export default App;
