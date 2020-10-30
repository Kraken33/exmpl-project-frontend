import { createAction } from "@reduxjs/toolkit";

export enum ETypes {
  FETCH_REQUEST = "@HOME/FETCH_REQUEST",
  FETCH_EMITTER = "@HOME/FETCH_EMITTER"
}

export const fetch = createAction(ETypes.FETCH_REQUEST);
export const putOn = createAction(ETypes.FETCH_EMITTER);
