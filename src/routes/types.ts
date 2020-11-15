import { LayoutsType } from "layouts/types";
import React from "react";

enum ERoutes {
  api = "api",
  home = "home"
}

export type Breadcrumb = null | string | React.ReactNode;

export interface IRoute {
  path: string;
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
  [k in keyof typeof ERoutes]: IRoute;
};

export interface PreparedRoutesForBreadcrumbs
  extends Pick<IRoute, "path" | "breadcrumb"> {}
