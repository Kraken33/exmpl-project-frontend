import { shallow } from "enzyme";
import { rProp } from "utils/component-test";

import { Input } from "../input";
import { FormControlTypes } from "./types";
import { Component } from "./view";

describe("testing form controler", () => {
  const props = {
    type: FormControlTypes.input,
  };
  const rComponent = rProp(Component);

  it("should render without errors", () => {
    const wrapper = shallow(rComponent(props));
    expect(wrapper).toBeTruthy();
  });

  it("should set right component type", () => {
    const wrapper = shallow(rComponent(props));
    expect(wrapper.props().component).toEqual(Input);
  });
});
