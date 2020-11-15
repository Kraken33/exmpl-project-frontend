import { Button } from "antd";
import { shallow } from "enzyme";
import { r } from "utils/component-test";

import { InnerProps } from "./types";
import { Component } from "./view";

describe("testing api component", () => {
  const props: InnerProps = {
    routes: ["/route"],
    intl: {}
  };
  const componentNode = r(Component, props);
  const wrapper = shallow(componentNode);

  it("should render without errors", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should disable button if there is no request", () => {
    const buttonWrapper = wrapper.find(Button);

    expect(buttonWrapper.props().disabled).toEqual(true);
  });

  it("should disable button if there is no request", () => {
    const buttonWrapper = wrapper.find(Button);

    expect(buttonWrapper.props().disabled).toEqual(true);
  });
});
