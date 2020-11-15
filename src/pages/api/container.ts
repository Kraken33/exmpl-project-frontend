import { compose, withProps } from "recompose";
import { values } from 'lodash/fp';

import { Component } from "./view";
import { routes } from 'services/api';

import { InnerProps } from './types';


const wrapper = compose<InnerProps, InnerProps>(
  withProps({
    routes: values(routes)
  })
);

const Container = wrapper(Component);

export { Container };
