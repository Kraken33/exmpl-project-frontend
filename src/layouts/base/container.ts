import { connect } from "react-redux";
import { compose } from "recompose";
import { siderToggleState } from "store/layout/actions";
import { getLayoutConfig, getSiderState } from "store/layout/selectors";
import { getLocationPathname } from "store/selectors";

import { BaseLayout, MapState2Props } from "./types";
import { Component } from "./view";

const mapState2Props: MapState2Props = (state) => ({
  layoutConfig: getLayoutConfig(state),
  siderIsOpen: getSiderState(state),
  pathname: getLocationPathname(state),
});

const mapDispatch2Props = {
  siderToggleState,
};

const wrapper = compose<BaseLayout, any>(
  connect(mapState2Props, mapDispatch2Props)
);

const Container = wrapper(Component);

export { Container };
