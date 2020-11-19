import { FormItemProps } from "antd/lib/form";
import { WrappedFieldProps } from "redux-form";

export interface FControlCode extends FormItemProps, WrappedFieldProps {
  type?: "input" | "textarea";
}
