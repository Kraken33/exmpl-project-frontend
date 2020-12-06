import { APP_NAME } from "consts";
import { flow, map } from "lodash/fp";
import React from "react";
import Helmet from "react-helmet";
import { Switch } from "react-router-dom";
import { addPermissionWrapper, buildRouter, extendRoute, routes } from "routes";

const Component: React.FC = () => {
  const router = buildRouter(
    map(flow(extendRoute, addPermissionWrapper))(routes)
  );

  return (
    <>
      <Helmet defaultTitle={`${APP_NAME}`} titleTemplate={`%s | ${APP_NAME}`} />
      <Switch>{router}</Switch>
    </>
  );
};

export { Component };
