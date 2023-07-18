import { handleActions } from "redux-actions";
import actions from "./action";
export const namespace = "contact";
export interface ContactStateType {
  tabs: any[];
  currentTab: number;
  contacts:any[],
}
export const defaultState: ContactStateType = {
  tabs: [
    { id: 1, text: "项目沟通" },
    { id: 2, text: "联系人中心" }
  ],
  contacts:[{
    id:1,name:'Mitch Lujan',avatar:'/avatar.jpg'
  },{
    id:2,name:'Sean Potts',avatar:'/avatar.jpg'
  },
    {
      id:3,name:'Ankit',avatar:'/avatar.jpg'
    },
    {
      id:4,name:'Ursula444',avatar:'/avatar.jpg'
    },
    {
      id:5,name:'martelantoine',avatar:'/avatar.jpg'
    },
    {
      id:6,name:'Elzat',avatar:'/avatar.jpg'
    },
    {
      id:7,name:'Mitch Lujan',avatar:'/avatar.jpg'
    },
    {
      id:8,name:'Sean Potts',avatar:'/avatar.jpg'
    },
    {
      id:9,name:'Ankit',avatar:'/avatar.jpg'
    }
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
