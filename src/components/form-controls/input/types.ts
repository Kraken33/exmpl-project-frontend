import { FormItemProps } from "antd/lib/form";
import { WrappedFieldProps } from "redux-form";

export interface FControlInput extends FormItemProps, WrappedFieldProps {
  type?: "input" | "textarea";
}
