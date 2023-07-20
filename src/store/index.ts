import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import globalSaga from "./modules/global/saga";
import contactSaga from "./modules/contact/saga";
import mapSaga from './modules/map/saga'
import { globalReducer, namespace as globalNamespace } from "./modules/global/reducer";
import { contactReducer, namespace as contactNamespace } from "./modules/contact/reducer";
import {mapReducer,namespace as mapNamespace} from './modules/map/reducer'
import { createWrapper, Context } from "next-redux-wrapper";
export function* rootSaga() {
  yield all([...globalSaga, ...contactSaga,mapSaga]);
}
const rootReducer = combineReducers({
  [globalNamespace]: globalReducer,
  [contactNamespace]: contactReducer,
  [mapNamespace]:mapReducer
});
export type RootState = ReturnType<typeof rootReducer>;
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
export const makeStore: any = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, undefined, bindMiddleware([sagaMiddleware]));
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
