import { Input } from "antd";
import FormItem from "components/form-item";
import React from "react";

import { FormControlTypes } from "../controler/types";
import { FControlInput } from "./types";

const { TextArea } = Input;

const Component: React.FC<FControlInput> = ({
  input,
  meta,
  type,
  label,
  required,
  ...attributes
}) => {
  return (
    <FormItem required={required} label={label} {...meta}>
      {type === FormControlTypes.textarea ? (
        <TextArea {...input} {...attributes} />
      ) : (
        <Input {...input} {...attributes} type={type} />
      )}
    </FormItem>
  );
};

export { Component };
