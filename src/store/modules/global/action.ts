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
  {
    prefix: "GLOBAL"
  }
);

export default actions;
