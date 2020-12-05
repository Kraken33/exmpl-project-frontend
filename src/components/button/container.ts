import { connect } from "react-redux";
import { hasPreloader } from "store/preloader/selectors";
import { IStoreState } from "store/types";

import { ButtonWaitProps } from "./types";
import { Component } from "./view";

const mapStateToProps = (
  state: IStoreState,
  ownProps: ButtonWaitProps
): any => {
  return {
    pending: hasPreloader(state, ownProps.on),
  };
};

const wrapper = connect(mapStateToProps, null);

const Container = wrapper(Component);

export { Container };
