import { shallow } from "enzyme";
import React from "react";
import { rProp } from "utils/component-test";

import { FormItem } from "./types";
import { Component } from "./view";

describe("testing form item component", () => {
  const rComponent = rProp<FormItem>(Component);

  const props: any = {
    children: null,
    required: false,
    label: "Label",
    touched: false,
    valid: true,
    error: false,
  };

  it("should render without errors", () => {
    const wrapper = shallow(rComponent(props));

    expect(wrapper).toBeTruthy();
  });

  it("should render error", () => {
    const _props = {
      ...props,
      touched: true,
      valid: false,
      error: "Error",
    };
    const wrapper = shallow(rComponent(_props));

    expect(wrapper.props()).toEqual({
      label: props.label,
      validateStatus: "error",
      help: _props.error,
      children: null,
    });
  });
});
