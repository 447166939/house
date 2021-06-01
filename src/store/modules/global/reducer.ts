import { handleActions } from "redux-actions";
import actions from "./action";

export const namespace = "global";
export const defaultState = {
  serviceMenuVisible: false,
  technologiesMenuVisible: false,
  solutionsMenuVisible: false,
  blogAndNewsMenuVisible: false
};
const {
  setServiceMenuVisible,
  setTechnologiesMenuVisible,
  setSolutionsMenuVisible,
  setBlogAndNewsMenuVisible,
  closeAllMenu
} = actions;
export const globalReducer = handleActions(
  {
    [setServiceMenuVisible as unknown as string]: (state, action) => {
      return {
        ...state,
        serviceMenuVisible: action.payload.serviceMenuVisible,
        technologiesMenuVisible: false,
        solutionsMenuVisible: false,
        blogAndNewsMenuVisible: false
      };
    },
    [setTechnologiesMenuVisible as unknown as string]: (state, action) => {
      return {
        ...state,
        serviceMenuVisible: false,
        technologiesMenuVisible: action.payload.technologiesMenuVisible,
        solutionsMenuVisible: false,
        blogAndNewsMenuVisible: false
      };
    },
    [setSolutionsMenuVisible as unknown as string]: (state, action) => {
      return {
        ...state,
        serviceMenuVisible: false,
        technologiesMenuVisible: false,
        solutionsMenuVisible: action.payload.solutionsMenuVisible,
        blogAndNewsMenuVisible: false
      };
    },
    [setBlogAndNewsMenuVisible as unknown as string]: (state, action) => {
      return {
        ...state,
        serviceMenuVisible: false,
        technologiesMenuVisible: false,
        solutionsMenuVisible: false,
        blogAndNewsMenuVisible: action.payload.blogAndNewsMenuVisible
      };
    },
    [closeAllMenu as unknown as string]: (state, action) => {
      return {
        ...state,
        serviceMenuVisible: false,
        technologiesMenuVisible: false,
        solutionsMenuVisible: false,
        blogAndNewsMenuVisible: false
      };
    }
  },
  defaultState
);
