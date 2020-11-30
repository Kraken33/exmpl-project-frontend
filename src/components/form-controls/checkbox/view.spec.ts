import { shallow } from "enzyme";
import { r } from "utils/component-test";

import { FControlCheckbox } from "./types";
import { Component } from "./view";

describe("testing input type form control", () => {
  const props: FControlCheckbox = {
    input: {
      value: "",
      onChange: () => null,
    } as any,
    meta: {
      touched: false,
      error: false,
      valid: true,
    } as any,
    label: "Label",
    required: false,
  };

  it("match snapshot", () => {
    const wrapper = shallow(r<FControlCheckbox>(Component, props));

    expect(wrapper).toMatchSnapshot();
  });
});