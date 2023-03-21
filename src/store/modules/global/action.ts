import { createActions } from "redux-actions";

const actions = createActions(
  {
    ADD_COUNT: (count) => count
  },
  "",
  {
    prefix: "GLOBAL"
  }
);

export default actions;
