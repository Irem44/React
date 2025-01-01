export interface ToDoInitialState {
  todos: ToDoType[];
}

export interface ToDoType {
  id: number;
  content: string;
}
