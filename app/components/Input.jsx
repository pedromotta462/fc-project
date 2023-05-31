import React from "react";
import "../styles/style.css";

const Inputs = ({ type, label }) => {
  return (
    <div className="input-group">
      <input
        required=""
        type={type}
        name="text"
        autoComplete="off"
        className="input text-black"
      />
      <label className="user-label">{label}</label>
    </div>
  );
};

export default Inputs;
