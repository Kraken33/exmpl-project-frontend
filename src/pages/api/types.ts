export enum EMethods {
  "POST" = "POST",
  "GET" = "GET",
  "PUT" = "PUT",
  "DELETE" = "DELETE",
}

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

export type Method = keyof typeof EMethods;

export interface State {
  method: Method;
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
}

export type KeysUnion = Exclude<EKeys, EKeys.response>;
