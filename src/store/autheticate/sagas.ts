import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { AvailableRoutes } from "routes";
import { api } from "services";
import { setPermissions } from "services/permission";
import { redirect } from "utils";

import { actions } from "../preloader";
import { authenticateReceive, ETypes as types } from "./actions";

function* authentication({ type, payload }: PayloadAction<any>) {
  try {
    yield put(actions.addPreloader({ preloaderName: type }));
    const { permissions, token } = yield call(api.authenticate.login, payload);
    yield call(setPermissions, permissions);
    yield put(authenticateReceive({ permissions, token }));
    yield call(redirect, AvailableRoutes.home);
  } catch (e) {
    console.error(e);
  } finally {
    yield put(actions.removePreloader({ preloaderName: type }));
  }
}

export function* entrySaga(): Generator {
  yield takeEvery(types.AUTHENTICATE_REQUEST, authentication);
}
