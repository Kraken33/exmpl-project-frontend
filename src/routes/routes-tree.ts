import { Layouts } from "layouts";

import { Routes } from "./types";

const routes: Routes = [
  {
    name: "home",
    path: "/",
    page: import("pages/home"),
  },
  {
    name: "api",
    path: "/api",
    page: import("pages/api"),
  },
  {
    name: "login",
    path: "/login",
    layout: Layouts.EmptyLayout,
    page: import("pages/login"),
    isGuest: true,
  },
];

export { routes };
