import React from "react";
import "./addPage.css";

const AddPage = (props) => (
  <div className="add-page-cont">
    <div className="add-left-cont">
      <div className="add-more-wrap">
        <span className="add-more-title">New charge</span>
        <label className="add-more-lable">
          Total
          <input className="add-more-inputs" onChange={props.value} />
        </label>
        <label className="add-more-lable">
          Description
          <input className="add-more-inputs" />
        </label>
        <label className="add-more-lable">
          Select category
          <select className="add-more-inputs" onChange={props.select}>
            <option selected="selected" disabled>
              ....
            </option>
            <option>fun</option>
            <option>pets</option>
            <option>food</option>
            <option>clothes</option>
            <option>health</option>
            <option>restoraunts</option>
            <option>transport</option>
            <option>bills</option>
            <option>other</option>
          </select>
        </label>
        <label className="add-more-lable">
          Date
          <input className="add-more-inputs" />
        </label>
        <div className="btn-wrap">
          <button className="add-more-btn" onClick={props.btn}>
            Add new charge
          </button>
        </div>
      </div>
    </div>
    <div className="add-rigth-cont">
      {" "}
      <div className="balance">
        <span className="balance-tittle">Balance</span>
        <span className="sum">${props.sum}</span>
      </div>
    </div>
  </div>
);
export default AddPage;
