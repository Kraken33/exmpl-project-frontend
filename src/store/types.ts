import { RouterState as IRouterState } from "connected-react-router";
import { FormStateMap as IFormStateMap } from "redux-form";

import { AuthenticateStore } from "./autheticate";
import { LayoutStore } from "./layout";
import { PreloaderStore } from "./preloader";

export interface IStoreState {
  router: IRouterState;
  form: IFormStateMap;
  layout: LayoutStore;
  authenticate: AuthenticateStore;
  preloader: PreloaderStore;
}
