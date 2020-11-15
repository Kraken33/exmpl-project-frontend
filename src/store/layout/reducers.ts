import { createReducer } from "@reduxjs/toolkit";
import produce from "immer";

import { ETypes as types } from "./actions";
import { LayoutStore } from "./types";

export const initialState: LayoutStore = {
  siderIsOpen: false,
  config: {
    menu: [
      {
        link: '/',
        label: 'Home',
        icon: 'VerticalAlignTopOutlined'
      }
    ]
  }
};

export const entryReducer = createReducer<any>(initialState, {
  [types.FETCH_CONFIG_RECEIVER]: (state: any, { payload }: any) => {
    return produce(state, (draft: LayoutStore) => {
      draft.config = payload;
    });
  },
  [types.SIDER_TOGGLE_STATE]: (state: any, { payload }: any) => {
    return produce(state, (draft: LayoutStore) => {
      draft.siderIsOpen = !draft.siderIsOpen;
    });
  }
});
