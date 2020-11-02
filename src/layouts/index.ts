import { Empty as EmptyLayout } from "./empty";
import { default as BaseLayout } from "./base";
import { LayoutsType } from "./types";

export enum ELayouts {
  "EmptyLayout" = "EmptyLayout",
  "BaseLayout"= "BaseLayout"
}

export const Layouts: LayoutsType = {
  EmptyLayout: EmptyLayout,
  BaseLayout: BaseLayout
};
