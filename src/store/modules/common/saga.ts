import axios from "axios";
import { fork, put, takeEvery } from "redux-saga/effects";
import actions from "./action";
const { tempGetInfo, tempSetInfo } = actions;

function* getTemp() {
  const result = "temp";
  yield put(tempSetInfo(result));
}

function* watchCommon() {
  yield takeEvery(tempGetInfo, getTemp);
}

export default [fork(watchCommon)];
