import { AUTHENTICATE, LOGOUT } from "../actionTypes";

export const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
