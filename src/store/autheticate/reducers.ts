import { PayloadAction, createReducer } from "@reduxjs/toolkit";

import { ETypes as types } from "./actions";
import { AuthenticateStore } from "./types";

export const initialState: AuthenticateStore = {
  isAuthenticate: false,
  permissions: ["home"],
  role: null,
  token: null,
};

export const entryReducer = createReducer(initialState, {
  [types.AUTHENTICATE_RECEIVER]: (
    state: AuthenticateStore,
    { payload }: PayloadAction<any>
  ) => {
    state.isAuthenticate = true;
    state.token = payload.token;
    state.permissions = payload.permissions;

    return state;
  },
});
