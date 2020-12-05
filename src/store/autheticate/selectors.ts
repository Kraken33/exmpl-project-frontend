import { get } from "lodash/fp";
import { createSelector } from "reselect";

import { AvailableKeys } from "./types";

export const selectNames: { [k in AvailableKeys]: AvailableKeys } = {
  authenticate: "authenticate",
  isAuthenticate: "isAuthenticate",
  permissions: "permissions",
  role: "role",
  token: "token",
};

const getAuthenticateState = get(selectNames.authenticate);

const isAuthenticate = createSelector(
  [getAuthenticateState],
  get(selectNames.isAuthenticate)
);

export { getAuthenticateState, isAuthenticate };
