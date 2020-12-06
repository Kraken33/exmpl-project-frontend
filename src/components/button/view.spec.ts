import { shallow } from "enzyme";
import { rProp } from "utils/component-test";

import { Component } from "./view";

describe("testing button component", () => {
  const rComponent = rProp(Component);
  it("should render without errors", () => {
    const wrapper = shallow(rComponent({}));
    expect(wrapper).toBeTruthy();
  });

  it("should view incon with pending", () => {
    const wrapper = shallow(rComponent({ pending: true }));
    expect(wrapper.props().icon).toBeTruthy();
  });
});
