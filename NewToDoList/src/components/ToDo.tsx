import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";
import "../css/todo.css";
import { ToDoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updated } from "../redux/todoSlice";
import { FaCheck } from "react-icons/fa";

interface ToDoProps {
  todoProps: ToDoType;
}

function ToDo({ todoProps }: ToDoProps) {
  const dispatch = useDispatch();

  const { id, content } = todoProps;
  const [editable, setEditable] = useState<boolean>(false);

  const [newTodo, setNewTodo] = useState<string>(content);

  const deleted = () => {
    dispatch(removeTodoById(id));
  };

  const update = () => {
    const payload: ToDoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updated(payload));
    setEditable(false);
  };

  return (
    <div className="todoRow">
      <div>
        {editable ? (
          <input
            style={{
              width: "300px",
              border: "none",
              borderBottom: "1px solid lightgrey",
              outline: "none",
            }}
            type="text"
            value={newTodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTodo(e.target.value)
            }
          />
        ) : (
          <div>{content}</div>
        )}
      </div>
      <div className="icons">
        <MdDelete
          style={{ fontSize: "20px", marginRight: "5px" }}
          onClick={deleted}
        />
        {editable ? (
          <FaCheck style={{ fontSize: "20px" }} onClick={update} />
        ) : (
          <HiPencil
            onClick={() => setEditable(true)}
            style={{ fontSize: "20px" }}
          />
        )}
      </div>
    </div>
  );
}

export default ToDo;
