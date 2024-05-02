import {createSlice} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';
import {DATA} from '../constants/appConstants';
const colorScheme = Appearance.getColorScheme();
export const counterSlice = createSlice({
  name: 'appStore',
  initialState: {
    isDarkMode: colorScheme == 'dark',
    isLoggedIn: false,
    searchDataTag: 'ALL',
    data: [],
    appUser: {
      userId: '123',
      email: 'test123@gmail.com',
      firstName: 'Akhil',
      lastName: 'Nallamothou',
      userPreference: {
        placeId: '',
        addressText: '',
        lat: '',
        lng: '',
      },
    },
  },
  reducers: {
    setTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
    setLoggedIn: state => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    searchDataTag: (state, action) => {
      state.searchDataTag = action.payload;
    },
    updateData: (state, action) => {
      state.data = action.payload;
    },
    updateAppUser: (state, action) => {
      state.appUser = action.payload;
    },
    updateAppUserPref: (state, action) => {
      console.log(action, '&&&&&');
      state.appUser.userPreference = action.payload;
    },
  },
});

export const {
  setTheme,
  setLoggedIn,
  searchDataTag,
  updateData,
  updateAppUser,
  updateAppUserPref,
} = counterSlice.actions;

export const appState = state => state.themeMode;

export default counterSlice.reducer;
