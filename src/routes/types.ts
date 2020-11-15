import { LayoutsType } from "layouts/types";
import React from "react";

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

export interface IPagesTree {
  home: React.ComponentType;
  api: React.ComponentType;
}

export type Routes = {
  [key in keyof IPagesTree]: IRoute;
};

export interface PreparedRoutesForBreadcrumbs
  extends Pick<IRoute, "path" | "breadcrumb"> {}
