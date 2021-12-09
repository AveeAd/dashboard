import axios from "axios";
import { FETCH_ORDERS } from "../actionTypes";

export const fetchOrders = (url) => (dispatch) => {
  axios.get(url).then((res) =>
    dispatch({
      type: FETCH_ORDERS,
      payload: res.data,
    })
  );
};
