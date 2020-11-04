import { compose } from "recompose";
import { connect } from "react-redux";

import { BaseLayoutComponent } from "./view";
import { getLayoutConfig, getSiderState } from "store/layout/selectors";
import { siderToggleState } from 'store/layout/actions';
import { MapState2Props, BaseLayout } from "./types";

const mapState2Props: MapState2Props = (state)=>({
    layoutConfig: getLayoutConfig(state),
    siderIsOpen: getSiderState(state)
});

const mapDispatch2Props = {
    siderToggleState
};

const wrapper = compose<BaseLayout, any>(
    connect(mapState2Props, mapDispatch2Props)
);


const BaseLayoutContainer = wrapper(BaseLayoutComponent);

export { BaseLayoutContainer };
