import { AvailableRoutes, getLink } from "routes";
import { history } from "store";

const redirect = (
  routeName: keyof typeof AvailableRoutes,
  ...args: any[]
): void => {
  history.push(getLink(routeName, ...args));
};

export { redirect };
