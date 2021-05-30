import { fork } from "redux-saga/effects";
function* watchCommon() {}
export default [fork(watchCommon)];
