import React from "react";

enum ERoutes {
  api = "api",
  home = "home",
  login = "login",
}

export type Breadcrumb = null | string | React.ReactNode;

export interface Route {
  path: any;
  layout: string;
  page: any;
  breadcrumb: Breadcrumb;
  icon?: string;
  exact?: boolean;
  link(...args: any[]): string;
}

export type IPagesTree = {
  [k in keyof typeof ERoutes]: React.ComponentType;
};

export type Routes = {
  [k in keyof typeof ERoutes]: Route;
};

export type PreparedRoutesForBreadcrumbs = Pick<Route, "path" | "breadcrumb">;
