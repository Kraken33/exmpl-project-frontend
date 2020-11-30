import { Layouts } from "layouts/consts";
import __ from "lodash/fp";
import React from "react";
import { Route } from "react-router-dom";
import { Route as RouteType, Routes } from "routes/types";
import { intl } from "services/intl";
import { loadable } from "utils/loadable";

import { AvailableRoutes } from "./consts";

const routesShape: any = {};

const buildBreadcrumb = (buildFn: Function) => ({
  breadcrumb,
  name,
}: Pick<RouteType, "breadcrumb" | "name">) => breadcrumb || buildFn(name);

const buildBreadcrumbWithIntl = buildBreadcrumb((name: string) =>
  intl(`layoutBreadcrumb${name}`)
);

const dynamicPage = ({
  name,
  require,
  pendingComponent = () => "...",
}: any) => {
  return loadable(
    name,
    () => require,
    () => pendingComponent
  );
};

const createRoute = ({
  name,
  page,
  path,
  layout = Layouts.BaseLayout,
  breadcrumb,
  link = () => path,
  exact = true,
}: RouteType): RouteType => {
  const route = {
    name,
    path,
    layout,
    page: dynamicPage({ name, require: page }),
    exact,
    link,
    get breadcrumb() {
      // @TODO Dont load translates

      return buildBreadcrumbWithIntl({ breadcrumb, name });
    },
  };
  routesShape[name] = route;
  return route;
};

const buildRoutes = __.map(createRoute);

const buildRouter = (routes: Routes): React.ReactNode => {
  return routes.map((route) => {
    const { layout = Layouts.EmptyLayout, page: Page, ...rest } = route;
    const Layout = require("layouts").Layouts[layout]; // eslint-disable-line @typescript-eslint/no-var-requires, global-require

    return (
      <Route
        key={rest.path}
        render={(matchProps) => (
          <Layout preparedRoutesForBreadcrumbs={routes}>
            <Page {...matchProps} />
          </Layout>
        )}
        {...rest}
      />
    );
  });
};

const getLink = (
  routeName: keyof typeof AvailableRoutes,
  ...args: any[]
): string => routesShape[routeName].link(...args);

export { buildRouter, buildRoutes, getLink };
