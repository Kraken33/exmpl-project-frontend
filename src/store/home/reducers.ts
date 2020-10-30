import { createReducer } from "@reduxjs/toolkit";
import produce from "immer";

import { ETypes as types } from "./actions";
import { IStore } from "./types";

export const initialState: IStore = {
  someProperty: null
};

export const entryReducer = createReducer<any>(initialState, {
  [types.FETCH_EMITTER]: (state: any, { payload }: any) => {
    return produce(state, (draft: IStore) => {
      draft.someProperty = payload;
    });
  }
});
