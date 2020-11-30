import { values } from "lodash/fp";
import { compose, withProps } from "recompose";
import { routes } from "services/api";
import { withIntl } from "services/intl";

import { InnerProps } from "./types";
import { Component } from "./view";

const wrapper = compose<InnerProps, InnerProps>(
  withIntl,
  withProps({
    routes: values(routes),
  })
);

const Container = wrapper(Component);

export { Container };
