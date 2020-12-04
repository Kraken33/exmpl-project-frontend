import { PayloadAction, createReducer } from "@reduxjs/toolkit";

import { ETypes as preloader } from "./actions";
import { IRemovePreloaderPayload, PreloaderStore } from "./types";

const initialState: PreloaderStore = {
  list: [],
};

const entryReducer = createReducer<any>(initialState, {
  [preloader.ADD](state: PreloaderStore, { payload }) {
    state.list.push(payload.preloaderName);

    return state;
  },

  [preloader.REMOVE](
    state: PreloaderStore,
    { payload }: PayloadAction<IRemovePreloaderPayload>
  ) {
    state.list = state.list.filter((s: string) =>
      s === payload.preloaderName ? 0 : 1
    );

    return state;
  },
});

export { entryReducer };
