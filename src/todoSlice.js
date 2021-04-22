import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    lastId: 0,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo = [
        ...state.todo,
        {
          id: ++state.lastId,
          todo: action.payload,
          checked: false,
        },
      ];
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload.id);
    },
    checkedTodo: (state, action) => {
      state.todo = state.todo.map((todo) =>
        todo.id !== action.payload.id ? todo : { ...todo, checked: true }
      );
    },
  },
});

export const { addTodo, removeTodo, checkedTodo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.todo;

export default todoSlice.reducer;
