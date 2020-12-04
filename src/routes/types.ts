import React from "react";

import { AvailableRoutes } from "./consts";

export type Breadcrumb = null | string | React.ReactNode;

export interface Route {
  name: keyof typeof AvailableRoutes;
  path: any;
  layout?: string;
  page: any;
  breadcrumb?: Breadcrumb;
  icon?: string;
  exact?: boolean;
  isGuest?: boolean;
  link?(...args: any[]): string;
}

export type Routes = Route[];

export type PreparedRoutesForBreadcrumbs = Pick<Route, "path" | "breadcrumb">;
