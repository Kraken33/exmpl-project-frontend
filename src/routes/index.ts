import { history } from "./history";
import * as router from "./router";
import { routes } from "./routes-tree";

const routers = router.buildRouter(router.buildRoutes(routes));

export { routers, history };
