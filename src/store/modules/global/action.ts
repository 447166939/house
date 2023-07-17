import { createActions } from "redux-actions";

const actions = createActions(
  {
    ADD_COUNT: (count) => count
  },
  "SET_CURRENTNAV","SET_PANNEL",
  {
    prefix: "GLOBAL"
  }
);

export default actions;
