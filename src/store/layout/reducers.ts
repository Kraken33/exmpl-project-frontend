import { PayloadAction, createReducer } from "@reduxjs/toolkit";

import { ETypes as types } from "./actions";
import { Config, LayoutStore } from "./types";

export const initialState: LayoutStore = {
  siderIsOpen: false,
  config: {
    menu: [
      {
        link: "/",
        label: "Home",
        icon: "VerticalAlignTopOutlined",
      },
    ],
  },
};

export const entryReducer = createReducer(initialState, {
  [types.FETCH_CONFIG_RECEIVER]: (
    state: LayoutStore,
    { payload }: PayloadAction<Config>
  ) => {
    state.config = payload;
    return state;
  },
  [types.SIDER_TOGGLE_STATE]: (state: LayoutStore) => {
    state.siderIsOpen = !state.siderIsOpen;
    return state;
  },
});
