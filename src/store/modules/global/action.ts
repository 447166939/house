import { createActions } from "redux-actions";
const actions = createActions(
  {
    SET_SERVICE_MENU_VISIBLE: (serviceMenuVisible) => ({ serviceMenuVisible }),
    SET_TECHNOLOGIES_MENU_VISIBLE: (technologiesMenuVisible) => ({ technologiesMenuVisible }),
    SET_SOLUTIONS_MENU_VISIBLE: (solutionsMenuVisible) => ({ solutionsMenuVisible }),
    SET_BLOG_AND_NEWS_MENU_VISIBLE: (blogAndNewsMenuVisible) => ({ blogAndNewsMenuVisible })
  },
  "CLOSE_ALL_MENU",
    {
        prefix:'GLOBAL'
    }
);

export default actions;
