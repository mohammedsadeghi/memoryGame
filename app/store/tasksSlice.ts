import {createSlice} from '@reduxjs/toolkit';

export type Difficulty = {
  id: 'Easy' | 'Medium' | 'Hard';
};

export type InitialState = {
  status: 'idle' | 'loading' | 'complete';
  entities: Difficulty;
};

const initialState: InitialState = {
  status: 'idle',
  entities: {
    id: 'Easy',
  },
};

const tasksSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeDifficulty(state, action) {
      const difficulty = action.payload;
      state.entities.id = difficulty;
    },
  },
});

export const {changeDifficulty} = tasksSlice.actions;

export default tasksSlice.reducer;
