export const DARK_MODE = 'DARK_MODE';
export const SEARCH_DATA_TAG = 'SEARCH_DATA_TAG';
export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_APP_USER = 'UPDATE_APP_USER';
export const UPDATE_APP_USER_PREF = 'UPDATE_APP_USER_PREF';

export const toggleDarkMode = () => ({
  type: DARK_MODE,
});

export const toggleLoginMode = () => ({
  type: TOGGLE_LOGIN,
});

export const searchDataTag = () => ({
  type: SEARCH_DATA_TAG,
});

export const updateData = () => ({
  type: UPDATE_DATA,
});

export const updateAppUser = () => ({
  type: UPDATE_APP_USER,
});

export const updateAppUserPref = () => ({
  type: UPDATE_APP_USER_PREF,
});
