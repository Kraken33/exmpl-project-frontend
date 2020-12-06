import { ButtonProps as BtnProps } from "antd/lib/button";

export type ButtonProps = BtnProps & {
  pending?: boolean;
  dispatch?: any;
};

export type ButtonWaitProps = ButtonProps & {
  on: string;
};
