import { FControlInput } from "../input/types";

export enum FormControlTypes {
  input = "input",
  textarea = "textarea",
  switch = "switch",
  code = "code",
  password = "password",
  checkbox = "checkbox",
}

export type Types = keyof typeof FormControlTypes;

export type Dictionary = {
  [k in FormControlTypes]: any;
};

export type Control = {
  type: Types;
} & FControlInput &
  any;
