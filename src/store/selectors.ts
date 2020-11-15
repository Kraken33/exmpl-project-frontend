import { get } from "lodash/fp";
import { createSelector } from "reselect";

export const selectNames = {
  router: "router",
  location: "location",
  pathname: "pathname"
};

const getRouterState = get(selectNames.router);

const getRouterLocation = createSelector(
  [getRouterState],
  get(selectNames.location)
);

const getLocationPathname = createSelector(
  [getRouterLocation],
  get(selectNames.pathname)
);

export { getLocationPathname };
