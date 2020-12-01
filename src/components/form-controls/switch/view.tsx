import { Form, Switch } from "antd";
import { FormItemProps } from "antd/lib/form";
import React from "react";

import { FControlInput } from "./types";

const Component: React.FC<FControlInput> = ({
  input,
  meta,
  label,
  required,
  ...attributes
}) => {
  const formItemProps: FormItemProps = {
    label: required ? `${label}*` : label,
    validateStatus: meta.touched && !meta.valid ? "error" : undefined,
    help: meta.touched && meta.error ? meta.error : null,
  };

  return (
    <Form.Item {...formItemProps}>
      <Switch {...attributes} checked={input.value} onChange={input.onChange} />
    </Form.Item>
  );
};

export { Component };
