import React, { useState } from "react";
import "../css/create.css";
import CreateElement from "../components/CreateElement";
import { SlGameController } from "react-icons/sl";

function Create(props) {
  const [inputValue, setInputValue] = useState("");
  const add = () => {
    props.fnc(inputValue);
    setInputValue("");
  };
  return (
    <div className="header">
      <div className="title">
        <h3>To Do List</h3>
      </div>
      <div className="header_input">
        <input
          className="enter"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className="add" onClick={add}>
          Add
        </button>
      </div>
      {props.brand.map((item, index) => (
        <CreateElement key={index} icerik={item} /> // Listeyi render et
      ))}
    </div>
  );
}

export default Create;
