import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'themeMode',
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    setTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const {setTheme} = counterSlice.actions;

export const themeMode = state => state.themeMode.isDarkMode;

export default counterSlice.reducer;
