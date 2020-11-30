import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";

import { authenticateReceive, ETypes as types } from "./actions";

function* authentication({ payload }: PayloadAction<any>) {
  yield put(authenticateReceive(payload));
}

export function* entrySaga(): Generator {
  yield takeEvery(types.AUTHENTICATE_REQUEST, authentication);
}
