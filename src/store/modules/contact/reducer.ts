import { handleActions } from "redux-actions";
import actions from "./action";
export const namespace = "contact";
export interface ContactStateType {
  tabs: any[];
  currentTab: number;
  contacts: any[];
  chatList: any[];
  contactInfo: any;
  centerContacts: any[];
}
export const defaultState: ContactStateType = {
  tabs: [
    { id: 1, text: "项目沟通" },
    { id: 2, text: "联系人中心" }
  ],
  contacts: [
    {
      id: 1,
      name: "Mitch Lujan",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 2,
      name: "Sean Potts",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 3,
      name: "Ankit",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 4,
      name: "Ursula444",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 5,
      name: "martelantoine",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 6,
      name: "Elzat",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 7,
      name: "Mitch Lujan",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 8,
      name: "Sean Potts",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 9,
      name: "Ankit",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 10,
      name: "Ankit",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    },
    {
      id: 11,
      name: "Ankit",
      avatar: "/avatar.jpg",
      tags: ["Accountant", "Seattle,WA", "English"]
    }
  ],
  currentTab: 0,
  chatList: [
    {
      id: 1,
      avatar: "/avatar.jpg",
      name: "Mitch Lujan",
      msg: "Oops! we actually pushed a version of panning. that didn't have all the bug fixes in it... We just upgraded it again and now your panned images should have improved coherence and less image splitting. Enjoy!"
    },
    {
      id: 2,
      avatar: "/avatar.jpg",
      name: "Sean Potts",
      msg: "Oops! we actually pushed a version of panning. that didn't have all the bug fixes in it... We just upgraded it again and now your panned images should have improved coherence and less image splitting. Enjoy!"
    },
    {
      id: 3,
      avatar: "/avatar.jpg",
      name: "martelantoine",
      msg: "Oops! we actually pushed a version of panning. that didn't have all the bug fixes in it... We just upgraded it again and now your panned images should have improved coherence and less image splitting. Enjoy!"
    }
  ],
  contactInfo: {
    avatar: "/avatar.jpg",
    name: "Mitch Lujan",
    remark: "这是一句个人名言",
    tags: ["Accountant", "Seattle,WA", "English"],
    potts: { title: "Sean Potts", text: "seanpotts" },
    date: { title: "MEMBER SINCE", text: "Jan 10, 2023" },
    note: { title: "NOTE", text: "click to add note" },
    server: "1 Mutual Server",
    friends: "2 MutualFriends"
  },
  centerContacts: [
    {
      id: 1,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 2,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 3,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 4,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 5,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 6,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 7,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 8,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 9,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 10,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 11,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 12,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 13,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 14,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 15,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 16,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 17,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 18,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 19,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 20,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 21,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 22,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: true
    },
    {
      id: 23,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    },
    {
      id: 24,
      avatar: "/avatar.jpg",
      name: "Brent Mcaliste",
      remark: "这是一句个人简介",
      tags: ["Accountant", "Seattle,WA", "English"],
      isFriend: false
    }
  ]
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
