import { handleActions } from "redux-actions";
import actions from "./action";
export const namespace = "map";
export interface ContactStateType {
  tabs: any[];
  currentTab: number;
}
export const defaultState: ContactStateType = {
  tabs: [
    { id: 1, text: "备选项目" },
    { id: 2, text: "档案库" }
  ],
  currentTab: 0
};
const { setTab } = actions;
export const mapReducer = handleActions(
  {
    [setTab as unknown as string]: (state, action: any) => {
      return {
        ...state,
        currentTab: action.payload
      };
    }
  },
  defaultState
);
