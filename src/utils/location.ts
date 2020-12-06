import { AvailableRoutes } from "routes/consts";
import { history } from "routes/history";

const redirect = (
  routeName: keyof typeof AvailableRoutes,
  ...args: any[]
): void => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  history.push(require("routes").getLink(routeName, ...args));
};

export { redirect };
