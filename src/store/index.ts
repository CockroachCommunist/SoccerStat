import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaWiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaWiddleware))
);

sagaWiddleware.run(rootSaga);

export interface IAction<T> {
  type: string;
  payload: T;
}

export default store;
