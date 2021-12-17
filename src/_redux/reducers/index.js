import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";
import { authReducer } from "./authReducer";
import { customerReducer } from "./customerReducer";
import { productReducer } from "./productReducer";
import { feedbackReducer } from "./feedbackReducer";

const rootReducer = combineReducers({
  orders: orderReducer,
  auth: authReducer,
  customers: customerReducer,
  products: productReducer,
  feedbacks: feedbackReducer,
});

export default rootReducer;
