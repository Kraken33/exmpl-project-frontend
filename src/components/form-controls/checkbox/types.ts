import { CheckboxProps } from "antd/lib/checkbox";
import { FormItemProps } from "antd/lib/form";
import { WrappedFieldProps } from "redux-form";

export type FControlCheckbox = {
  type?: "input" | "textarea";
} & FormItemProps &
  WrappedFieldProps &
  CheckboxProps;
