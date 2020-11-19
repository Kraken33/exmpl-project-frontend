import React from "react";
import { useIntl } from "services/intl";

const HomeComponent: React.FC<unknown> = () => {
  const { test } = useIntl();

  return <div>React Typescript boilerplate {test}</div>;
};

export const View = HomeComponent;
