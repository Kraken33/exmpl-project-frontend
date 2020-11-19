import { FControlInput } from "../input/types";

export enum FormControlTypes {
  input = "input",
  switch = "switch",
  code = "code",
  password = "password",
}

export type Types = keyof typeof FormControlTypes;

export type Dictionary = {
  [k in FormControlTypes]: any;
};

export type Control = {
  type: Types;
} & FControlInput &
  any;
