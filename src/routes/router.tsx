import { Layouts } from "layouts";
import { assign, compose, map } from "lodash/fp";
import React from "react";
import { Route } from "react-router-dom";
import { withIntl } from "services/intl";
import { withAuthentication, withPermissions } from "services/permission";
import { isAuthenticate } from "store/autheticate/selectors";
import { loadable } from "utils/loadable";

import { AvailableRoutes } from "./consts";
import { Route as RouteType } from "./types";

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
  isGuest,
}: RouteType): RouteType => {
  const route = {
    name,
    path,
    layout,
    page: dynamicPage({ name, require: page }),
    exact,
    link,
    isGuest,
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
  route.isGuest
    ? route
    : assign(route, {
        page: compose(
          withAuthentication({ authenticateSelector: isAuthenticate }),
          withPermissions(route.name)
        )(route.page),
      });

const buildRouter = map((route: RouteType, ...args: any) => {
  const { layout: Layout = Layouts.EmptyLayout, page: Page, ...rest } = route;

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
): string => routesShape[routeName]?.link(...args);

export { buildRouter, extendRoute, getLink, addPermissionWrapper };
