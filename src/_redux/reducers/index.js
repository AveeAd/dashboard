import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { orderReducer } from "./orderReducer";

const rootReducer = combineReducers({
  orders: orderReducer,
  modal: modalReducer,
});

export default rootReducer;
