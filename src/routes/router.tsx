import { Layouts } from "layouts/consts";
import { assign, map } from "lodash/fp";
import React from "react";
import { Route } from "react-router-dom";
import { Route as RouteType } from "routes/types";
import { withIntl } from "services/intl";
import { withPermissions } from "services/permission/module";
import { loadable } from "utils/loadable";

import { AvailableRoutes } from "./consts";

const routesShape: any = {};

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

const extendRoute = ({
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
    breadcrumb: withIntl(({ intl }: any) => {
      const firstLatterToUpperCase = (str: string) => str[0].toUpperCase();
      const wordWithoutFirstLetter = (str: string) => str.slice(1);
      const breadcrumbKey: string = "layoutBreadcrumb".concat(
        firstLatterToUpperCase(name),
        wordWithoutFirstLetter(name)
      );

      return <span>{breadcrumb || intl[breadcrumbKey]}</span>;
    }),
  };
  routesShape[name] = route;
  return route;
};

const addPermissionWrapper = (route: RouteType): RouteType =>
  assign(route, { page: withPermissions(route.name)(route.page) });

const buildRouter = map((route: RouteType, ...args: any) => {
  const { layout = Layouts.EmptyLayout, page: Page, ...rest } = route;
  const Layout = require("layouts").Layouts[layout]; // eslint-disable-line @typescript-eslint/no-var-requires, global-require

  return (
    <Route
      key={route.path}
      render={(matchProps) => (
        <Layout preparedRoutesForBreadcrumbs={args[1]}>
          <Page {...matchProps} />
        </Layout>
      )}
      {...rest}
    />
  );
});

const getLink = (
  routeName: keyof typeof AvailableRoutes,
  ...args: any[]
): string => routesShape[routeName].link(...args);

export { buildRouter, extendRoute, getLink, addPermissionWrapper };
