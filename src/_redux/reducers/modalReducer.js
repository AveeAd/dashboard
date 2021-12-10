import { SHOW_MODAL, HIDE_MODAL } from "../actionTypes";

export const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return {
        ...state,
        show: false,
      };
  }
};
