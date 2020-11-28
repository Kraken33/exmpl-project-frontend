// import { Layouts as LayoutsComponent } from "layouts";
import { Layouts } from "layouts/consts";
import React from "react";
import { Route } from "react-router-dom";

import { Routes } from "./types";

const buildRoutes = (routes: Routes): React.ReactNode => {
  const routeNames = Object.keys(routes) as Array<keyof Routes>;
  return routeNames.map((key) => {
    const { layout = Layouts.EmptyLayout, page: Page, ...rest } = routes[key];
    const Layout = require("layouts").Layouts[layout]; // eslint-disable-line @typescript-eslint/no-var-requires, global-require

    return (
      <Route
        key={rest.path}
        {...rest}
        render={(matchProps) => (
          <Layout>
            <Page {...matchProps} />
          </Layout>
        )}
      />
    );
  });
};

export { buildRoutes };
