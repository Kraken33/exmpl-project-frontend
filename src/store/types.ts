import { RouterState as IRouterState } from "connected-react-router";
import { FormStateMap as IFormStateMap } from "redux-form";

import { IStore as IStoreHome } from "./home/types";

export interface IStoreState {
  router: IRouterState;
  form: IFormStateMap;
  home: IStoreHome;
}
