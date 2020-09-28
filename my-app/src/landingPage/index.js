import React from "react";
import "./index.css";
const LandingPage = (props) => (
  <div className="red-bar">
    <button className="start-btn" onClick={props.btn}>
      <span className="brand-title">MONEY</span>
      <span className="brand-title">COUNTER</span>
    </button>
  </div>
);
export default LandingPage;
