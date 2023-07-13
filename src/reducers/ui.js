import { SET_LOADER } from "../actions/types";

const initialState = {
  loading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
