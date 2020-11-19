/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */

import { typeofNames } from "consts";
import { Layouts } from "layouts/consts";

import { pages } from "./pages";
import { Route, Routes } from "./types";

export const CreateRoute = ({
  path,
  layout = Layouts.BaseLayout,
  page,
  breadcrumb,
  link = () => path,
  exact = true,
}: Partial<Route>): Route => ({
  path,
  layout,
  page,
  exact,
  link,
  ...(typeof breadcrumb === typeofNames.string
    ? {
        get breadcrumb() {
          return breadcrumb;
        },
      }
    : { breadcrumb }),
});

const routes: Routes = {
  home: CreateRoute({
    path: "/",
    page: pages.home,
    breadcrumb: "Home",
  }),
  api: CreateRoute({
    path: "/api",
    page: pages.api,
    breadcrumb: "Api",
  }),
  login: CreateRoute({
    path: "/login",
    page: pages.login,
    breadcrumb: "Login",
    layout: Layouts.EmptyLayout,
  }),
};

export { routes };
