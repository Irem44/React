import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import "../App.css";

export default function ToDo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, title } = todo;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(title);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      title: newTodo,
    };

    onUpdateTodo(request);
    setEditable(false);
  };
  return (
    <div className="element">
      <div className="content">
        <div>
          {editable ? (
            <input
              style={{ marginTop: "10px", width: "300px" }}
              className="giris"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            ></input>
          ) : (
            title
          )}
        </div>

        <div className="icons">
          <MdDelete onClick={removeTodo} />

          {editable ? (
            <FaCheck onClick={updateTodo} />
          ) : (
            <HiPencil onClick={() => setEditable(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
