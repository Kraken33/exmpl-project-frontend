import { FormItemProps } from "antd/lib/form";
import { InputProps, TextAreaProps } from "antd/lib/input";
import { WrappedFieldProps } from "redux-form";

export type FControlInput = FormItemProps &
  InputProps &
  TextAreaProps &
  WrappedFieldProps & {
    type?: "input" | "textarea";
  };
