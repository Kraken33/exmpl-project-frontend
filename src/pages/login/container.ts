import { connect } from "react-redux";
import { compose } from "recompose";
import { reduxForm } from "redux-form";
import { api } from "services";
import { withIntl } from "services/intl";
import { authenticate } from "store/autheticate";
import { asyncValidate } from "utils";

import { FormItemNames, FormName } from "./consts";
import { InnerProps } from "./types";
import { Component } from "./view";

const mapDispatch2Props: any = {
  authenticate,
};

const wrapper = compose<InnerProps, InnerProps>(
  withIntl,
  connect(null, mapDispatch2Props),
  reduxForm({
    form: FormName,
    asyncBlurFields: Object.values(FormItemNames),
    asyncValidate: asyncValidate({
      formName: FormName,
      apiHandler: api.authenticate.login,
    }),
  })
);

const Container = wrapper(Component);

export { Container };
