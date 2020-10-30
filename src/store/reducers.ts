import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";

import * as reducers from "./export-reducers";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers
  });

export { createRootReducer };
