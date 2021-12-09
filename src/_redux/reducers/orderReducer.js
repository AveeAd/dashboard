import { FETCH_ORDERS } from "../actionTypes";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return {
        ...state,
        orders: [],
      };
  }
};
