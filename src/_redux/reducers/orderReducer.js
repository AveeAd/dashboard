import {
  ADD_ORDER,
  DELETE_ORDER,
  FETCH_ORDERS,
  UPDATE_ORDER,
} from "../actionTypes";

const initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        ),
      };
    default:
      return {
        ...state,
        orders: [],
      };
  }
};
