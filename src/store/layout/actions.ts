import { createAction } from "@reduxjs/toolkit";

import { Config } from "./types";

export enum ETypes {
  FETCH_CONFIG_REQUEST = "@LAYOUT/FETCH_CONFIG_REQUEST",
  FETCH_CONFIG_RECEIVER = "@LAYOUT/FETCH_CONFIG_RECEIVER",
  SIDER_TOGGLE_STATE = "@LAYOUT/SIDER_STATE_TOGGLE",
}

export const fetchLayoutConfig = createAction(ETypes.FETCH_CONFIG_REQUEST);
export const saveLayoutConfig = createAction<Config>(
  ETypes.FETCH_CONFIG_RECEIVER
);

export const siderToggleState = createAction(ETypes.SIDER_TOGGLE_STATE);
