import { createSelector } from "reselect";

import { IStoreState } from "../types";
import { PreloaderStore } from "./types";

const getPreloaderState = (state: IStoreState): PreloaderStore =>
  state.preloader;
const preloaderNames = (
  state: IStoreState,
  preloaderNames: string | string[]
): string[] => {
  if (!Array.isArray(preloaderNames)) {
    preloaderNames = [preloaderNames];
  }
  return preloaderNames;
};

export const getPreloader = createSelector(
  [getPreloaderState],
  (preloader: PreloaderStore): PreloaderStore => preloader
);

export const getPreloadersList = createSelector(
  [getPreloader],
  (preloaderState: PreloaderStore): any => preloaderState.list
);

export const hasPreloader = createSelector(
  [getPreloadersList, preloaderNames],
  (list, preloaderNames): boolean => {
    return preloaderNames.some((name) => list.includes(name));
  }
);
