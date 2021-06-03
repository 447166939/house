import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import globalSaga from "./modules/global/saga";
import { globalReducer, namespace as globalNamespace } from "./modules/global/reducer";
import { createWrapper } from "next-redux-wrapper";
export function* rootSaga() {
  yield all([...globalSaga]);
}
const rootReducer = combineReducers({
  [globalNamespace]: globalReducer
});
export type RootState = ReturnType<typeof rootReducer>;
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
export interface DefaultRootState {
  global: {};
}
export const makeStore = (context: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
