import { all } from "redux-saga/effects";

import * as allSagas from "./export-sagas";

export function* sagas() {
  yield all(Object.values(allSagas).map(saga => saga()));
}
