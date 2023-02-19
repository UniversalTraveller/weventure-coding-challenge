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
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        task: action.payload,
        done: false,
      };
      state.todos.push(todo);
    },
    clearAllTodos: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, clearAllTodos } = todoSlice.actions;

export default todoSlice.reducer;
