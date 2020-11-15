import { loadable } from "./loadable";
import { IPagesTree } from "./types";

const { Spinner } = require("components");

const RoutePage = (name: string, _import: any) => {
  return loadable(
    "pages" + name,
    () => _import,
    () => Spinner
  );
};

const pages: IPagesTree = {
  home: RoutePage("home", import("pages/home")),
  api: RoutePage("api", import("pages/api"))
};

export { pages };
