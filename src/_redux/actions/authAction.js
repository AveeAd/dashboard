import { AUTHENTICATE, LOGOUT } from "../actionTypes";

export const loginAction = () => (dispatch) => {
  dispatch({
    type: AUTHENTICATE,
    payload: true,
  });
};

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: false,
  });
};
