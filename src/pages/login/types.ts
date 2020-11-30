import { InjectedFormProps } from "redux-form";

export interface InnerProps extends InjectedFormProps {
  intl: { [k: string]: string };
  authenticate: any;
}
