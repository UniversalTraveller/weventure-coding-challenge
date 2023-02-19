import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
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
  reducers: {},
});

export const { addTodo, deleteTodo, clearAllTodos, toggleTodoDone } =
  todoSlice.actions;

export default todoSlice.reducer;
