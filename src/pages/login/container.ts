import { connect } from "react-redux";
import { compose } from "recompose";
import { reduxForm } from "redux-form";
import { withIntl } from "services/intl";
import { actions } from "store/autheticate";

import { FormName } from "./consts";
import { InnerProps } from "./types";
import { Component } from "./view";

const { authenticate } = actions;

const mapDispatch2Props: any = {
  authenticate,
};

const wrapper = compose<InnerProps, InnerProps>(
  withIntl,
  connect(null, mapDispatch2Props),
  reduxForm({
    form: FormName,
  })
);

const Container = wrapper(Component);

export { Container };
