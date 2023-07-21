import { handleActions } from "redux-actions";
import actions from "./action";
export const namespace = "map";
export interface ContactStateType {
  tabs: any[];
  currentTab: number;
  tabpane1Data:any;
}
export const defaultState: ContactStateType = {
  tabs: [
    { id: 1, text: "备选项目" },
    { id: 2, text: "档案库" }
  ],
  currentTab: 0,
  tabpane1Data:{
    title:'西雅图华盛顿州房地产和房屋出售',
    result:'137结果',
    list:[
      {
        id:1,
        imgUrl:'/house.png',
        title:'现代首都带泳池豪华别墅',
        address:'美国加利福尼亚州北岭市德文希尔...',
        bedroom:'5卧室',
        bathroom:"6浴室",
        area:"120平米",
        money:"$124,200",
        date:"2小时前发布"
      },
      {
        id:2,
        imgUrl:'/house.png',
        title:'现代首都带泳池豪华别墅',
        address:'美国加利福尼亚州北岭市德文希尔...',
        bedroom:'5卧室',
        bathroom:"6浴室",
        area:"120平米",
        money:"$124,200",
        date:"2小时前发布"
      },
      {
        id:3,
        imgUrl:'/house.png',
        title:'现代首都带泳池豪华别墅',
        address:'美国加利福尼亚州北岭市德文希尔...',
        bedroom:'5卧室',
        bathroom:"6浴室",
        area:"120平米",
        money:"$124,200",
        date:"2小时前发布"
      },
      {
        id:4,
        imgUrl:'/house.png',
        title:'现代首都带泳池豪华别墅',
        address:'美国加利福尼亚州北岭市德文希尔...',
        bedroom:'5卧室',
        bathroom:"6浴室",
        area:"120平米",
        money:"$124,200",
        date:"2小时前发布"
      },
      {
        id:5,
        imgUrl:'/house.png',
        title:'现代首都带泳池豪华别墅',
        address:'美国加利福尼亚州北岭市德文希尔...',
        bedroom:'5卧室',
        bathroom:"6浴室",
        area:"120平米",
        money:"$124,200",
        date:"2小时前发布"
      },
      {
        id:6,
        imgUrl:'/house.png',
        title:'现代首都带泳池豪华别墅',
        address:'美国加利福尼亚州北岭市德文希尔...',
        bedroom:'5卧室',
        bathroom:"6浴室",
        area:"120平米",
        money:"$124,200",
        date:"2小时前发布"
      },
    ]
  }
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
