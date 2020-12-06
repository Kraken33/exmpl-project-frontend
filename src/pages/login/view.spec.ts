import { shallow } from "enzyme";
import { r } from "utils/component-test";

import { Component } from "./view";

describe("testing login page", () => {
  const handleSubmit = jest.fn();
  const props = { handleSubmit, intl: {} };

  it("should render without errors", () => {
    const wrapper = shallow(r(Component, props));
    expect(wrapper).toBeTruthy();
  });

  it("match snapshot", () => {
    const wrapper = shallow(r(Component, props));
    expect(wrapper).toMatchSnapshot();
  });
});
