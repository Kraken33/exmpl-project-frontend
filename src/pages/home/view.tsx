import React from "react";
import { useIntl } from "services/intl";

const HomeComponent: React.FC<unknown> = () => {
  const { testKey } = useIntl();

  return <div>React Typescript boilerplate {testKey}</div>;
};

export const View = HomeComponent;
