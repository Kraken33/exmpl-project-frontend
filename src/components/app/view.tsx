import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { RoutesSwitch } from "routes";

import { IProps } from "./types";

import { APP_NAME } from "consts";

const View: React.FC<IProps> = () => {
  return (
    <Fragment>
      <Helmet defaultTitle={`${APP_NAME}`} titleTemplate={`%s | ${APP_NAME}`} />
      <RoutesSwitch />
    </Fragment>
  );
};

export { View };
