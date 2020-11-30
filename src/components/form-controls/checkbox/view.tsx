import { Checkbox } from "antd";
import FormItem from "components/form-item";
import React from "react";

import { FControlCheckbox } from "./types";

const Component: React.FC<FControlCheckbox> = ({
  input,
  meta,
  type,
  label,
  required,
  ...attributes
}) => {
  return (
    <FormItem required={required} label={label} {...meta}>
      <Checkbox
        onChange={input.onChange}
        checked={input.value}
        {...attributes}
      />
    </FormItem>
  );
};

export { Component };
