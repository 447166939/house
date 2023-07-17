import { handleActions } from "redux-actions";
import actions from "./action";
export const namespace = "global";
export interface GlobalStateType {
  count: number;
  currentNav: number;
  navs: any[];
  commonChannels: any[];
  currentChannel: number;
  projects: any[];
  currentManageChannel: number;
  currentPannel: number;
  pannels: any[];
}
export const defaultState: GlobalStateType = {
  count: 1,
  currentNav: 0,
  navs: [
    { text: "首页", id: 1, path: "/" },
    { text: "课程", id: 2, path: "/course" },
    { text: "地图", id: 3, path: "/map" },
    { text: "项目管理", id: 4, path: "/project" }
  ],
  commonChannels: [
    { icon: "/person.png", title: "通用聊天频道", id: 1 },
    { title: "自定义聊天频道1", id: 2 },
    { title: "自定义聊天频道2", id: 3 },
    { title: "自定义聊天频道3", id: 4 }
  ],
  currentChannel: 0,
  projects: [
    { name: "1", id: 1, title: "项目提交Offer" },
    { name: "2", id: 2, title: "Offer被采纳" },
    { name: "3", id: 3, title: "房屋改造准备 " },
    { name: "4", id: 4, title: "房屋卖前准备 " },
    { name: "5", id: 5, title: "卖房阶段 " },
    { name: "6", id: 6, title: "售后事宜" },
    { name: "7", id: 7, title: "被动收入管理" }
  ],
  currentManageChannel: 0,
  currentPannel: 0,
  pannels: [
    { text: "阶段子任务", id: 1 },
    { id: 2, text: "房产投资计算器" }
  ]
};
const { addCount, setCurrentnav, setPannel,setChannel,setManagechannel } = actions;
export const globalReducer = handleActions(
  {
    [addCount as unknown as string]: (state, action: any) => {
      const { count } = state;
      return {
        ...state,
        count: count + action.payload
      };
    },
    [setCurrentnav as unknown as string]: (state, action: any) => {
      return {
        ...state,
        currentNav: action.payload
      };
    },
    [setPannel as unknown as string]: (state, action: any) => {
      return {
        ...state,
        currentPannel: action.payload
      };
    },
    [setChannel as unknown as string]: (state, action: any) => {
      return {
        ...state,
        currentChannel: action.payload
      };
    },
    [setManagechannel as unknown as string]: (state, action: any) => {
      return {
        ...state,
        currentManageChannel: action.payload
      };
    }
  },
  defaultState
);
