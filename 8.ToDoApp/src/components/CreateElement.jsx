import React from "react";
import "../css/createElement.css";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

function CreateElement(props) {
  return (
    <div className="list">
      <div className="input">
        {props.icerik}
        <div className="delete">
          <MdDelete />
        </div>
        <div className="update">
          <RxUpdate />
        </div>
      </div>
    </div>
  );
}

export default CreateElement;
