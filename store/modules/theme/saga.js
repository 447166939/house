import { fork, put, takeLatest } from 'redux-saga/effects'

import {
    tempSetInfo,
    tempGetInfo,
} from './action'

function* getTemp() {
    const result = 'temp'
    yield put(tempSetInfo(result))
}

function* watch() {
    yield takeLatest('TEMP_GET_INFO', getTemp)
}

export default [fork(watch)]