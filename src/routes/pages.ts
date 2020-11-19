import nanoid from "nanoid";

import { loadable } from "./loadable";
import { IPagesTree } from "./types";

const DynamicPage = (_import: any) => {
  return loadable(
    nanoid(),
    () => _import,
    () => ()=>'...'
  );
};

const pages: IPagesTree = {
  home: DynamicPage(import("pages/home")),
  api: DynamicPage(import("pages/api")),
  login: DynamicPage(import("pages/login")),
};

export { pages };
