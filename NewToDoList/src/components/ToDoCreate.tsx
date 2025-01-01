import React, { useState } from "react";
import "../css/toDoCreate.css";
import { useDispatch } from "react-redux";
import { createToDo } from "../redux/todoSlice";
import { ToDoType } from "../types/Types";

function ToDoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setnewTodo] = useState<string>("");

  const handleCreateToDo = () => {
    if (newTodo.trim().length == 0) {
      alert("todo giriniz!");
      return;
    }

    const data: ToDoType = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo,
    };

    dispatch(createToDo(data));
    setnewTodo("");
  };
  return (
    <div className="header">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setnewTodo(e.target.value)
        }
        type="text"
        placeholder="Buraya To Do Giriniz"
        className="enterToDo"
      ></input>
      <button onClick={handleCreateToDo} className="buttons">
        Ekle
      </button>
    </div>
  );
}

export default ToDoCreate;
