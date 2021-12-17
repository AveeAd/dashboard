import axios from "axios";
import { FETCH_CUSTOMERS } from "../actionTypes";

export const fetchCustomers = (limit, page) => async (dispatch) => {
  let { data } = await axios.get(`/customers?_limit=${limit}&_page=${page}`);
  console.log(data);
  let total = await axios.get("/customers");
  dispatch({
    type: FETCH_CUSTOMERS,
    payload: { customers: data, total: total.data.length },
  });
};
