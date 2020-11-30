import { siderToggleState } from "store/layout/actions";
import { Config } from "store/layout/types";
import { IStoreState } from "store/types";

interface MapState2PropsFields {
  layoutConfig: Config;
  siderIsOpen: boolean;
  pathname: string;
}

export type MapState2Props = (s: IStoreState) => MapState2PropsFields;

export interface MapDispatch2Props {
  siderToggleState: typeof siderToggleState;
}

export interface BaseLayout extends MapState2PropsFields, MapDispatch2Props {
  preparedRoutesForBreadcrumbs: any;
}
