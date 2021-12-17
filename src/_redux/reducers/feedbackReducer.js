import { FETCH_FEEDBACKS } from "../actionTypes";

export const feedbackReducer = (
  state = { feedbacks: [{}], total: 0 },
  action
) => {
  switch (action.type) {
    case FETCH_FEEDBACKS:
      return {
        ...state,
        feedbacks: action.payload.feedbacks,
        total: action.payload.total,
      };
    default:
      return {
        ...state,
      };
  }
};
