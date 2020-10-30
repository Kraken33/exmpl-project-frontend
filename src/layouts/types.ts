import React from "react";

import { ELayouts } from "./index";

export type LayoutsType = {
  [routeName in keyof typeof ELayouts]: React.ComponentType;
};
