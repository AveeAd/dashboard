import axios from "axios";
import {
  ADD_ORDER,
  DELETE_ORDER,
  FETCH_ORDERS,
  UPDATE_ORDER,
} from "../actionTypes";

export const fetchOrders = (url) => (dispatch) => {
  axios.get(url).then((res) =>
    dispatch({
      type: FETCH_ORDERS,
      payload: res.data,
    })
  );
};

export const addOrder = (order, url) => (dispatch) => {
  axios.post(url, order).then((res) =>
    dispatch({
      type: ADD_ORDER,
      payload: res.data,
    })
  );
};

export const deleteOrder = (url, id) => (dispatch) => {
  axios.delete(url).then((res) =>
    dispatch({
      type: DELETE_ORDER,
      payload: id,
    })
  );
};

export const updateOrder = (order, url) => (dispatch) => {
  axios.put(url, order).then((res) =>
    dispatch({
      type: UPDATE_ORDER,
      payload: res.data,
    })
  );
};
