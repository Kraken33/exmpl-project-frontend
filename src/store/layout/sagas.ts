import { takeEvery } from "redux-saga/effects";

import { ETypes as types } from "./actions";

export function* entrySaga(): Generator {
  yield takeEvery(types.FETCH_CONFIG_REQUEST, fetch);
}
