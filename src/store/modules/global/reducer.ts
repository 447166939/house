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
  tabs: any[];
  currentTab: number;
  userInfo: any;
  siderWidth: string;
  addFriendDialogOpen: boolean;
}
export const defaultState: GlobalStateType = {
  addFriendDialogOpen: false,
  siderWidth: "13.05rem",
  count: 1,
  currentNav: 0,
  navs: [
    { text: "首页", id: 1, path: "/" },
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
    { name: "1", id: 1, title: "项目提交Offer", status: 0 },
    { name: "2", id: 2, title: "Offer被采纳", status: 1 },
    { name: "3", id: 3, title: "房屋改造准备 ", status: 0 },
    { name: "4", id: 4, title: "房屋卖前准备 ", status: 0 },
    { name: "5", id: 5, title: "卖房阶段 ", status: 0 },
    { name: "6", id: 6, title: "售后事宜", status: 0 },
    { name: "7", id: 7, title: "被动收入管理", status: 0 }
  ],
  currentManageChannel: 0,
  currentPannel: 0,
  pannels: [
    { text: "阶段子任务", id: 1 },
    { id: 2, text: "房产投资计算器" },
    { id: 3, text: "备忘录" }
  ],
  tabs: [
    { id: 1, icon: "/task.png", text: "子任务细节描述" },
    { id: 2, icon: "/folder.png", text: "文件夹管理空间" },
    { id: 3, icon: "/backup.png", text: "备忘录" }
  ],
  currentTab: 0,
  userInfo: {
    avatar: "/avatar.jpg",
    name: "Tom.Tang",
    email: "tangshaobo90@gmail.com",
    status: "online"
  }
};
const {
  addCount,
  setCurrentnav,
  setPannel,
  setChannel,
  setManagechannel,
  setTab,
  setSiderwidth,
  setAddfrienddialogopen
} = actions;
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
    },
    [setTab as unknown as string]: (state, action: any) => {
      return {
        ...state,
        currentTab: action.payload
      };
    },
    [setSiderwidth as unknown as string]: (state, action: any) => {
      return {
        ...state,
        siderWidth: action.payload
      };
    },
    [setAddfrienddialogopen as unknown as string]: (state, action: any) => {
      return {
        ...state,
        addFriendDialogOpen: action.payload
      };
    }
  },
  defaultState
);
