import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './boardsSlice';

export default configureStore({
  reducer: {
    boards: boardsReducer
  }
})