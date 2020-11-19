import { routerMiddleware } from "connected-react-router";
import { Store, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import { history } from "routes/history";

import { createRootReducer } from "./reducers";
import { sagas } from "./sagas";

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const initialState = window.initialState || {};
const configureStore: (preloadedState?: { [k: string]: any }) => Store<any> = (
  preloadedState: any = initialState
) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );

  return store;
};

const store = configureStore();

sagaMiddleware.run(sagas);

export { store, history };
