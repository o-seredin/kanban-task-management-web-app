import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: data.boards,
  reducers: {
    setBoardActive: (state, action) => {
      state.map((board, index) => {
        index === action.payload.index ? (board.isActive = true) : (board.isActive = false);
        return board;
      });
    },
    setSubtaskCompleted: (state, action) => {
      const board = state.find(board => board.isActive);
      const column = board.columns.find((column, index) => index === action.payload.columnIndex);
      const task = column.tasks.find((task, index) => index === action.payload.taskIndex);
      const subtask = task.subtasks.find((subtask, index) => index === action.payload.subtaskIndex);
      subtask.isCompleted = !subtask.isCompleted;
    },
    setTaskStatus: (state, action) => {
      const board = state.find(board => board.isActive);
      const column = board.columns.find((column, index) => index === action.payload.columnIndex);
      const task = column.tasks.find((task, index) => index === action.payload.taskIndex);
      task.status = action.payload.newStatus;
      column.tasks = column.tasks.filter((task, index) => index !== action.payload.taskIndex);
      const newColumn = board.columns.find((column, index) => index === action.payload.newColumnIndex);
      newColumn.tasks.push(task);
    },
    addNewBoard: (state, action) => {
      const board = {name: action.payload.boardName, isActive: false, columns: action.payload.boardColumns};
      state.push(board);
    },
    addNewTask: (state, action) => {
      const board = state.find(board => board.isActive);
      const column = board.columns.find((column, index) => index === action.payload.newColumnIndex);
      const task = {
        title: action.payload.taskTitle,
        description: action.payload.description,
        subtasks: action.payload.subtasks
      };
      column.tasks.push(task);
    },
    deleteTask: (state, action) => {
      const board = state.find(board => board.isActive);
      const column = board.columns.find((column, index) => index === action.payload.columnIndex);
      column.tasks = column.tasks.filter((task, index) => index !== action.payload.taskIndex);
    },
    deleteBoard: (state) => {
      const board = state.find(board => board.isActive);
      state.splice(state.indexOf(board), 1);
    },
    editBoard: (state, action) => {
      const board = state.find(board => board.isActive);
      board.name = action.payload.boardName;
      board.columns = action.payload.boardColumns;
    },
    editTask: (state, action) => {
      const board = state.find(board => board.isActive);
      const column = board.columns.find((column, index) => index === action.payload.columnIndex);
      const task = column.tasks.find((task, index) => index === action.payload.taskIndex);
      task.title = action.payload.taskTitle;
      task.description = action.payload.description;
      task.subtasks = action.payload.subtasks;
    }
  }
});

export const { setBoardActive, setSubtaskCompleted, setTaskStatus, addNewBoard, addNewTask, deleteTask, deleteBoard, editBoard, editTask } = boardsSlice.actions;

export default boardsSlice.reducer;