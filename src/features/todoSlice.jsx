import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // Generate IDs with random for demonstration purpose.
    // In production a module like nanoid would probably be better.
    { task: "Get up at sunrise", done: true, id: Math.random() * 100 },
    { task: "Eat a healthy breakfast", done: true, id: Math.random() * 100 },
    { task: "Drink plenty of water", done: false, id: Math.random() * 100 },
    { task: "Exercise", done: false, id: Math.random() * 100 },
    { task: "Have fun :)", done: false, id: Math.random() * 100 },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        task: action.payload,
        done: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoDone: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    },
    clearAllTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoDone, clearAllTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
