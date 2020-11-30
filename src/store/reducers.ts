import { connectRouter } from "connected-react-router";
import { History } from "history";
import { Reducer, combineReducers } from "redux";

import * as reducers from "./export-reducers";
import { IStoreState } from "./types";

const createRootReducer = (history: History): Reducer<IStoreState> =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

export { createRootReducer };
