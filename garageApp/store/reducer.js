import {DARK_MODE} from './action';

const initialState = {
  darkModeEnabled: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        darkModeEnabled: !state.darkModeEnabled,
      };
    default:
      return state;
  }
};

export default reducer;
