import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onRemoveTodo, onUpdateTodo }) {
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <ToDo
            todo={todo}
            key={todo.id}
            onRemoveTodo={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
}

export default ToDoList;
