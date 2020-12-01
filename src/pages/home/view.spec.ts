import { shallow } from "enzyme";
import { r } from "utils/component-test";

import { Component } from "./view";

describe("testing home component", () => {
  it("should render without errors", () => {
    const wrapper = shallow(r(Component));

    expect(wrapper).toBeTruthy();
  });
});
