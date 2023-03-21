import { handleActions } from "redux-actions";
import actions from "./action";
export const namespace = "global";
export interface GlobalStateType {
  count: number;
}
export const defaultState: GlobalStateType = {
  count: 1
};
const { addCount } = actions;
export const globalReducer = handleActions(
  {
    [addCount as unknown as string]: (state, action: any) => {
      const { count } = state;
      return {
        ...state,
        count: count + action.payload
      };
    }
  },
  defaultState
);
