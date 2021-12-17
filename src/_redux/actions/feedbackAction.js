import axios from "axios";
import { FETCH_FEEDBACKS } from "../actionTypes";

export const fetchFeedback = (limit, page) => async (dispatch) => {
  let { data } = await axios.get(`/feedbacks?_limit=${limit}&_page=${page}`);
  let total = await axios.get(`/feedbacks`);
  dispatch({
    type: FETCH_FEEDBACKS,
    payload: { feedbacks: data, total: total.data.length },
  });
};
