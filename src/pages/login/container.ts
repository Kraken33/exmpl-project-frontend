import { compose } from "recompose";
import { reduxForm } from "redux-form";
import { withIntl } from "services/intl";

import { FormName } from "./consts";
import { InnerProps } from "./types";
import { Component } from "./view";

const wrapper = compose<InnerProps, InnerProps>(
  withIntl,
  reduxForm({
    form: FormName,
  })
);

const Container = wrapper(Component);

export { Container };
