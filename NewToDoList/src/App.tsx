// import { useState } from "react";

import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="main">
      <ToDoCreate />
      <ToDoList />
    </div>
  );
}

export default App;
