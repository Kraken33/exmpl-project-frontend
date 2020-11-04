import React from "react";

enum ELayouts {
  "EmptyLayout" = "EmptyLayout",
  "BaseLayout" = "BaseLayout"
}

export type LayoutsType = {
  [routeName in keyof typeof ELayouts]: React.ComponentType;
};
