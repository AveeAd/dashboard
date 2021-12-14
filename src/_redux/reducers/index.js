import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  orders: orderReducer,
  auth: authReducer,
});

export default rootReducer;
