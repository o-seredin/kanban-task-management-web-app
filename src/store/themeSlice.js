import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    setTheme: (state) => {
      state === 'light' ? 'dark' : 'light';
    }
  }
})