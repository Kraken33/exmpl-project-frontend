import React from "react";

export enum ERoutes {
  api = "api",
  home = "home",
  login = "login",
}

export type Breadcrumb = null | string | React.ReactNode;

export interface Route {
  name: keyof typeof ERoutes;
  path: any;
  layout?: string;
  page: any;
  breadcrumb?: Breadcrumb;
  icon?: string;
  exact?: boolean;
  link?(...args: any[]): string;
}

export type Routes = Route[];

export type PreparedRoutesForBreadcrumbs = Pick<Route, "path" | "breadcrumb">;
