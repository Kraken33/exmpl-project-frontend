import { FormItemProps } from "antd/lib/form";
import { SwitchProps } from "antd/lib/switch";
import { WrappedFieldProps } from "redux-form";

export type FControlInput = FormItemProps & SwitchProps & WrappedFieldProps;
