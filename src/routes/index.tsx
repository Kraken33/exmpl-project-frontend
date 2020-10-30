import React from "react";
import { Switch } from "react-router-dom";

import { buildRoutes } from "./build-routes";
import { history } from "./history";
import { loadable } from "./loadable";
import { routes } from "./routes-tree";

const RoutesSwitch: React.FC = () => <Switch>{buildRoutes(routes)}</Switch>;

export { routes, loadable, RoutesSwitch, history };
