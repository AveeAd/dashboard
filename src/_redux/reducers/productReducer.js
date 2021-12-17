import { FETCH_PRODUCTS } from "../actionTypes";

export const productReducer = (
  state = { products: [{}], total: 0 },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        total: action.payload.total,
      };
    default:
      return {
        ...state,
      };
  }
};
