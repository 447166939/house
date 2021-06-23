import { handleActions } from "redux-actions";
import actions from "./action";

export const namespace = "global";
export const defaultState = {};
export const globalReducer = handleActions({}, defaultState);
