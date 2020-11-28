import { default as BaseLayoutContainer } from "./base";
import { Empty as EmptyLayout } from "./empty";
import { LayoutsType } from "./types";

export const Layouts: LayoutsType = {
  EmptyLayout: EmptyLayout,
  BaseLayout: BaseLayoutContainer,
};
