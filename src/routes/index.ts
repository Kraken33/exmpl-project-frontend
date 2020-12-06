import { flow, map } from "lodash/fp";

import { addPermissionWrapper, buildRouter, extendRoute } from "./router";
import { routes } from "./routes-tree";

const routers = buildRouter(
  map(flow(extendRoute, addPermissionWrapper))(routes)
);

export { routers };
export { history } from "./history";
export { getLink } from "./router";
export { AvailableRoutes } from "./consts";
