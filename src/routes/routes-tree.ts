import { Layouts } from "layouts/consts";

import { Routes } from "./types";

const routes: Routes = [
  {
    name: "home",
    path: "/",
    // breadcrumb: "Home",
    page: import("pages/home"),
  },
  {
    name: "api",
    path: "/api",
    // breadcrumb: "Api",
    page: import("pages/api"),
  },
  {
    name: "login",
    path: "/login",
    breadcrumb: "Login",
    layout: Layouts.EmptyLayout,
    page: import("pages/login"),
  },
];

export { routes };
