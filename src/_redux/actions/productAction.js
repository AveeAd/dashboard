import axios from "axios";
import { FETCH_PRODUCTS } from "../actionTypes";

export const fetchProducts = (limit, page) => async (dispatch) => {
  let { data } = await axios.get(`/products?_limit=${limit}&_page=${page}`);
  let total = await axios.get("/products");
  dispatch({
    type: FETCH_PRODUCTS,
    payload: { products: data, total: total.data.length },
  });
};
