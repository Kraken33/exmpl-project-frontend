import { Form } from "antd";
import { FormItemProps } from "antd/lib/form";
import React from "react";

import { FormItem } from "./types";

const Component: React.FC<FormItem> = ({
  children,
  required,
  label,
  touched,
  valid,
  error,
}) => {
  const formItemProps: FormItemProps = {
    label: required ? `${label}*` : label,
    validateStatus: touched && !valid ? "error" : undefined,
    help: touched && error ? error : null,
  };

  return <Form.Item {...formItemProps}>{children}</Form.Item>;
};

export { Component };
