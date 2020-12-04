import { get } from "lodash/fp";
import { createSelector } from "reselect";

export const selectNames = {
  authenticate: "authenticate",
  isAuthenticate: "isAuthenticate",
};

const getAuthenticateState = get(selectNames.authenticate);

const isAuthenticate = createSelector(
  [getAuthenticateState],
  get(selectNames.isAuthenticate)
);

export { getAuthenticateState, isAuthenticate };
