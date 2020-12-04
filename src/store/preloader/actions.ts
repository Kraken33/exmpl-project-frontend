import { createAction } from "@reduxjs/toolkit";

import { IAddPreloaderPayload, IRemovePreloaderPayload } from "./types";

export enum ETypes {
  ADD = "@preloader/ADD",
  REMOVE = "@preloader/REMOVE",
}

export const addPreloader = createAction<IAddPreloaderPayload>(ETypes.ADD);
export const removePreloader = createAction<IRemovePreloaderPayload>(
  ETypes.REMOVE
);
