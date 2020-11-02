import { takeEvery } from "redux-saga/effects";

import { ETypes as types } from "./actions";

export function* fetch() {}

export function* entrySaga() {
  yield takeEvery(types.FETCH_CONFIG_REQUEST, fetch);
}
