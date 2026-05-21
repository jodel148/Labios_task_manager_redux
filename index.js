import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    // Adds a new task to the list
    addTask: (state, action) => {
      state.list.push(action.payload);
    },

    // Removes a task by its index
    removeTask: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
