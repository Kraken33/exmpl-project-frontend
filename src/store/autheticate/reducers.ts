import { PayloadAction, createReducer } from "@reduxjs/toolkit";

import { ETypes as types } from "./actions";
import { AuthenticateStore } from "./types";

export const initialState: AuthenticateStore = {
  isAuthentificate: false,
  permissions: ["home"],
  subject: null,
};

export const entryReducer = createReducer(initialState, {
  [types.AUTHENTICATE_RECEIVER]: (
    state: AuthenticateStore,
    { payload }: PayloadAction<any>
  ) => {
    state.isAuthentificate = true;
    state.subject = payload;
    return state;
  },
});
