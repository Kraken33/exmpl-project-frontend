import { flow, map } from "lodash/fp";

import { history } from "./history";
import * as router from "./router";
import { routes } from "./routes-tree";

const routers = router.buildRouter(
  map(flow(router.extendRoute, router.addPermissionWrapper))(routes)
);

export { routers, history, router };
export { getLink } from "./router";
export { AvailableRoutes } from "./consts";
