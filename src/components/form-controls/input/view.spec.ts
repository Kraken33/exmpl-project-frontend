import { shallow } from "enzyme";
import { r } from "utils/component-test";

import { FControlInput } from "./types";
import { Component } from "./view";

describe("testing input type form control", () => {
  const props: FControlInput = {
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
    const wrapper = shallow(r<FControlInput>(Component, props));

    expect(wrapper).toMatchSnapshot();
  });
});
