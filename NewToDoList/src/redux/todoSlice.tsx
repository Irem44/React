import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ToDoInitialState, ToDoType } from "../types/Types";

const initialState: ToDoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //Dışarıdan gelicek eleman ToDoType tipinde olucak
    createToDo: (state: ToDoInitialState, action: PayloadAction<ToDoType>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodoById: (
      state: ToDoInitialState,
      action: PayloadAction<number>
    ) => {
      state.todos = [
        ...state.todos.filter((todo: ToDoType) => todo.id !== action.payload),
      ];
    },

    updated: (state: ToDoInitialState, action: PayloadAction<ToDoType>) => {
      state.todos = [
        ...state.todos.map((todo: ToDoType) =>
          todo.id !== action.payload.id ? todo : action.payload
        ),
      ];
    },
  },
});

export const { createToDo, removeTodoById, updated } = todoSlice.actions;

export default todoSlice.reducer;
