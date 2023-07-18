import { handleActions } from "redux-actions";
import actions from "./action";
export const namespace = "contact";
export interface ContactStateType {
  tabs: any[];
  currentTab: number;
}
export const defaultState: ContactStateType = {
  tabs: [
    { id: 1, text: "项目沟通" },
    { id: 2, text: "联系人中心" }
  ],
  currentTab: 0
};
const { setTab } = actions;
export const contactReducer = handleActions(
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
