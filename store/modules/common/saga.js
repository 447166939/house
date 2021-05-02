import axios from 'axios'
import { fork, put, takeEvery } from 'redux-saga/effects'
import actions from './action'
const {
    // 模板
    tempGetInfo,
    tempSetInfo,
} =actions

function* getTemp() {
    const result = 'temp'
    console.log('tempsetinfo',tempSetInfo(result))
    yield put(tempSetInfo(result))
}



function* watchCommon() {
    console.log('watchcommon')
    yield takeEvery(tempGetInfo, getTemp)
}

export default watchCommon