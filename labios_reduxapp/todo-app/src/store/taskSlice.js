import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
      });
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
