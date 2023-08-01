import { createActions } from "redux-actions";

const actions = createActions(
  {},
  "SET_TAB",
  "SET_CREATEPROJECTDIALOGOPEN",

  {
    prefix: "CONTACT"
  }
);

export default actions;
