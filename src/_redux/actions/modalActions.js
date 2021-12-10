import { HIDE_MODAL, SHOW_MODAL } from "../actionTypes";

export const showModal = () => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
  });
};

export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  });
};
