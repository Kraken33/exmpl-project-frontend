import { cond, get, includes, isArray, negate, rearg, some } from "lodash/fp";
import { createSelector } from "reselect";
import { IStoreState } from "store/types";

const selectNames = {
  preloader: "preloader",
  list: "list",
};

const getPreloaderState = get(selectNames.preloader);

const preloaderNames = rearg(
  1,
  cond([
    [negate(isArray), (name) => [name]],
    [isArray, (names) => names],
  ])
);

const getPreloadersList = createSelector(
  [getPreloaderState],
  get(selectNames.list)
);

const hasPreloader: (s: IStoreState, k: string) => boolean = createSelector(
  [getPreloadersList, preloaderNames],
  (list, names) => some((name) => includes(name)(list))(names)
);

export { selectNames, hasPreloader, getPreloadersList, preloaderNames };
