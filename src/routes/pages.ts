import { loadable } from "./loadable";
import { IPagesTree } from "./types";

const { Spinner } = require("components");

const pages: IPagesTree = {
  home: loadable(
    "pages/home",
    () => import("pages/home"),
    () => Spinner
  )
};

export { pages };
