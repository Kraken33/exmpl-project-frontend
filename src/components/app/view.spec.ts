import { shallow } from "enzyme";
import { r } from "utils/component-test";

import { Component } from "./view";

describe("testing app component", () => {
  const rComponent = r(Component);

  it("should render without errors", () => {
    const wrapper = shallow(rComponent);

    expect(wrapper).toBeTruthy();
  });
});
