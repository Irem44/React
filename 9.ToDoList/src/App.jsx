import { useState } from "react";

import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });

    setTodos([...updatedTodos]);
  };
  return (
    <div className="main">
      <ToDoCreate onCreateTodo={createTodos} />
      <ToDoList
        todos={todos}
        onRemoveTodo={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
