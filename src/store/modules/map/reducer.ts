import { handleActions } from "redux-actions";
import actions from "./action";
export const namespace = "map";
export interface ContactStateType {
  tabs: any[];
  currentTab: number;
  tabpane1Data: any;
  detail: any;
}
export const defaultState: ContactStateType = {
  tabs: [
    { id: 1, text: "备选项目" },
    { id: 2, text: "档案库" }
  ],
  currentTab: 0,
  tabpane1Data: {
    title: "西雅图华盛顿州房地产和房屋出售",
    result: "137结果",
    list: [
      {
        id: 1,
        imgUrl: "/house.png",
        title: "现代首都带泳池豪华别墅",
        address: "美国加利福尼亚州北岭市德文希尔...",
        bedroom: "5卧室",
        bathroom: "6浴室",
        area: "120平米",
        money: "$124,200",
        date: "2小时前发布",
        isCollect: true
      },
      {
        id: 2,
        imgUrl: "/house.png",
        title: "现代首都带泳池豪华别墅",
        address: "美国加利福尼亚州北岭市德文希尔...",
        bedroom: "5卧室",
        bathroom: "6浴室",
        area: "120平米",
        money: "$124,200",
        date: "2小时前发布",
        isCollect: false
      },
      {
        id: 3,
        imgUrl: "/house.png",
        title: "现代首都带泳池豪华别墅",
        address: "美国加利福尼亚州北岭市德文希尔...",
        bedroom: "5卧室",
        bathroom: "6浴室",
        area: "120平米",
        money: "$124,200",
        date: "2小时前发布",
        isCollect: true
      },
      {
        id: 4,
        imgUrl: "/house.png",
        title: "现代首都带泳池豪华别墅",
        address: "美国加利福尼亚州北岭市德文希尔...",
        bedroom: "5卧室",
        bathroom: "6浴室",
        area: "120平米",
        money: "$124,200",
        date: "2小时前发布",
        isCollect: false
      },
      {
        id: 5,
        imgUrl: "/house.png",
        title: "现代首都带泳池豪华别墅",
        address: "美国加利福尼亚州北岭市德文希尔...",
        bedroom: "5卧室",
        bathroom: "6浴室",
        area: "120平米",
        money: "$124,200",
        date: "2小时前发布",
        isCollect: true
      },
      {
        id: 6,
        imgUrl: "/house.png",
        title: "现代首都带泳池豪华别墅",
        address: "美国加利福尼亚州北岭市德文希尔...",
        bedroom: "5卧室",
        bathroom: "6浴室",
        area: "120平米",
        money: "$124,200",
        date: "2小时前发布",
        isCollect: false
      }
    ]
  },
  detail: {
    pictures: [
      "/house.png",
      "/house.png",
      "/house.png",
      "/house.png",
      "/house.png",
      "/house.png",
      "/house.png",
      "/house.png",
      "/house.png",
      "/house.png",
      "/house.png"
    ],
    money: "$134,000",
    address: "2339 Noble Rd, Cleveland Heights, OH 44121",
    links: [
      { text: "Overview " },
      { text: "Facts and features" },
      { text: "Home value" },
      { text: "Price and tax hist" },
      { text: "Price and tax hist" },
      { text: "Price and tax hist" },
      { text: "Price and tax hist" }
    ],
    overviewText:
      "Duplex, multi family\n" +
      "Built in 1959\n" +
      "Forced air, gas\n" +
      "None\n" +
      "p2 Garage spaces\n" +
      "$55 price/sqft",
    overviewContent:
      "Come check out this partially occupied duplex in ClevelandHeights! Situated on a corner lot, this property offers twospacious units with incredibly easy access to local shopping.parks, and more. The lower unit is currently rented by a long",
    day: "1",
    views: "165",
    save: "24",
    description:
      "Listing Provided by:\n" +
      "JAMM Real Estate Co.\n" +
      "jordan Marra 574-575-3242\n" +
      "\n" +
      "Source: MLS Now，MLS#:4470098\n" +
      "Originating MLS: Akron Cleveland Association of REALTORS\n" +
      "\n" +
      "Zillow last checked: 12 minutes ago\n" +
      "Listing updated: 11 hours ago"
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
