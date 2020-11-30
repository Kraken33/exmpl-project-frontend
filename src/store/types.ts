import { RouterState as IRouterState } from "connected-react-router";
import { FormStateMap as IFormStateMap } from "redux-form";

import { AuthenticateStore } from "./autheticate/types";
import { LayoutStore } from "./layout/types";

export interface IStoreState {
  router: IRouterState;
  form: IFormStateMap;
  layout: LayoutStore;
  authenticate: AuthenticateStore;
}
