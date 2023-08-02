import { createActions } from "redux-actions";

const actions = createActions(
  {
    ADD_COUNT: (count) => count
  },
  "SET_CURRENTNAV",
  "SET_PANNEL",
  "SET_CHANNEL",
  "SET_MANAGECHANNEL",
  "SET_TAB",
  "SET_SIDERWIDTH",
  "SET_ADDFRIENDDIALOGOPEN",
  "SET_SETTINGDIALOGOPEN",
  "SET_PANNELWIDTH",
  "SET_CHATHEIGHT",
  "SET_SUBTASKHEIGHT",
  "SET_FILEMANAGEHEIGHT",
  "SET_HELPDIALOGOPEN",
  "SET_PROJECTINFOPOS",
  "SET_PROJECTINFOVISIBLE",
  {
    prefix: "GLOBAL"
  }
);

export default actions;
