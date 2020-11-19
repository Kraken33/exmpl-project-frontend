import { APP_NAME } from "consts";
import React from "react";
import Helmet from "react-helmet";
import { RoutesSwitch } from "routes";

const View: React.FC = () => {
  return (
    <>
      <Helmet defaultTitle={`${APP_NAME}`} titleTemplate={`%s | ${APP_NAME}`} />
      <RoutesSwitch />
    </>
  );
};

export { View };
