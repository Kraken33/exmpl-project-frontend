import { typeofNames } from "consts";
import { Layouts } from "layouts/consts";

import { pages } from "./pages";
import { Routes } from "./types";

export const Route = ({
  path,
  layout = Layouts.BaseLayout,
  page,
  breadcrumb,
  link = () => path,
  exact = true
}: any): any =>
  Object.assign(
    {
      path,
      layout,
      page,
      exact,
      link
    },
    typeof breadcrumb === typeofNames.string
      ? {
          get breadcrumb() {
            return breadcrumb;
          }
        }
      : { breadcrumb }
  );

const routes: Routes = {
  home: Route({
    path: "/",
    page: pages.home,
    breadcrumb: "Home"
  }),
  api: Route({
    path: "/api",
    page: pages.api,
    breadcrumb: "Api"
  })
};

export { routes };
