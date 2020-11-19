import { HttpMethods } from "consts";

export enum EKeys {
  "method" = "method",
  "request" = "request",
  "json" = "json",
  "response" = "response",
  "header" = "header",
}

export enum ERequestDataType {
  "json" = "json",
  "header" = "header",
}

export type Method = keyof typeof HttpMethods;

export interface State {
  method: string;
  request: string;
  json: string;
  response: { [k: string]: any };
  header: string;
}

export type RequestDataTypes = Array<{
  value: ERequestDataType;
  label: string;
}>;

export interface InnerProps {
  routes: string[];
  intl: { [k: string]: string };
}

export type KeysUnion = Exclude<EKeys, EKeys.response>;
