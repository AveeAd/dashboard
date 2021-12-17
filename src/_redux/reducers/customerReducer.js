import { FETCH_CUSTOMERS } from "../actionTypes";

export const customerReducer = (
  state = { customers: [{}], total: 0 },
  action
) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return {
        ...state,
        customers: action.payload.customers,
        total: action.payload.total,
      };
    default:
      return {
        ...state,
      };
  }
};
