// import { BaseLayoutContainer } from "layouts/base/container";

import { pages } from "./pages";
import { Routes } from "./types";

const routes: Routes = {
  home: {
    path: `/`,
    layout: "BaseLayout",
    page: pages.home,
    get breadcrumb() {
      return "Home";
    },
    link() {
      return this.path;
    },
    exact: true
  }
};

export { routes };
