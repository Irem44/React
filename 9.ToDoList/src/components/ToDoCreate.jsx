import React from "react";
import "../App.css";
import { useState } from "react";

//Bu componentin amacı giriş inputu ve butonu eklemek

function ToDoCreate({ onCreateTodo }) {
  const [content, setContent] = useState("");

  const clearInput = () => {
    setContent("");
  };

  const todo = () => {
    if (!content) return;

    const request = {
      id: Math.floor(Math.random() * 22222222222),
      title: content,
    };

    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="header">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="giris"
        type="text"
        placeholder="To Do Giriniz"
      ></input>
      <button onClick={todo} className="ekle">
        Ekle
      </button>
    </div>
  );
}

export default ToDoCreate;
