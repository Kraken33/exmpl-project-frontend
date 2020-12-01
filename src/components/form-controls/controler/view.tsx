import React from "react";
import { Field } from "redux-form";
import { error } from "utils/errors";

import { Checkbox } from "../checkbox";
import { Code } from "../code";
import { Input } from "../input";
import { Switch } from "../switch";
import { Control, Dictionary, Types } from "./types";

const Component: React.FC<Control> = ({ type, ...props }) => {
  const typeSwitcher = (componentTypeName: Types) => {
    const typesDictionary: Dictionary = {
      input: Input,
      textarea: Input,
      password: Input,
      switch: Switch,
      code: Code,
      checkbox: Checkbox,
    };
    const currentFormElement = typesDictionary[componentTypeName];

    !currentFormElement &&
      error(`Type ${componentTypeName} missing in form control types!`);

    return currentFormElement || Input;
  };

  return (
    <Field {...(props as any)} type={type} component={typeSwitcher(type)} />
  );
};

export { Component };
