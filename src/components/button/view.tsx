import { LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

import { ButtonProps } from "./types";

const Component: React.FC<ButtonProps> = ({ pending, children, ...rest }) => {
  const props = {
    ...rest,
    ...(pending
      ? { icon: pending ? <LoadingOutlined /> : undefined, disabled: true }
      : {}),
  };
  return <Button {...props}>{children}</Button>;
};

export { Component };
