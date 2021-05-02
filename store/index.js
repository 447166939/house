import { applyMiddleware, createStore,combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {all,fork,call} from 'redux-saga/effects'
import commonSaga from './modules/common/saga'
import { commonReducer, namespace as commonNamespace} from './modules/common/reducer'
import { createWrapper } from 'next-redux-wrapper'
export function* rootSaga() {
    yield all([
        ...commonSaga
    ])
}
const rootReducer = combineReducers({
    [commonNamespace]: commonReducer,
})
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
