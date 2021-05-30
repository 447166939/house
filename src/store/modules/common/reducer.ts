import { handleActions, combineActions } from "redux-actions";
import actions from "./action";
const { tempSetInfo } = actions;
export const namespace = "common";

export const defaultState = {
  data: []
};

export const commonReducer = handleActions(
  {
    [combineActions(tempSetInfo)]: (state, { payload }) => {
      return {
        ...state,
        data: payload.result
      };
    }
  },
  defaultState
);
