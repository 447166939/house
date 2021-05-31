import { fork } from "redux-saga/effects";
function* watchGlobal() {}
export default [fork(watchGlobal)];
