import { createAction } from "@reduxjs/toolkit";

export enum ETypes {
  AUTHENTICATE_REQUEST = "@LOGIN/AUTHENTICATE_REQUEST",
  AUTHENTICATE_RECEIVER = "@LAYOUT/AUTHENTICATE_RECEIVE",
}

export const authenticate = createAction(ETypes.AUTHENTICATE_REQUEST);
export const authenticateReceive = createAction<any>(
  ETypes.AUTHENTICATE_RECEIVER
);
