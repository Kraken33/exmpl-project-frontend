import { IStoreState } from "store/types";
import { Config } from 'store/layout/types';
import { siderToggleState } from 'store/layout/actions';



interface MapState2PropsFields {
    layoutConfig: Config;
    siderIsOpen: boolean;
    pathname: string;
};

export type MapState2Props = (s: IStoreState)=>MapState2PropsFields;

export interface MapDispatch2Props {
    siderToggleState: typeof siderToggleState;
}

export interface BaseLayout extends MapState2PropsFields, MapDispatch2Props {
    preparedRoutesForBreadcrumbs: any;
}
