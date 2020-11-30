import { SiderProps } from "antd/lib/layout";
import Sider from "antd/lib/layout/Sider";
import { shallow } from "enzyme";
import { rProp } from "utils/component-test";

import { BaseLayout } from "./types";
import { Component } from "./view";

describe("testing base layout component", () => {
  const rComponent = rProp<BaseLayout>(Component);
  const initialProps: any = {
    siderIsOpen: false,
    siderToggleState: jest.fn() as any,
    layoutConfig: {
      menu: [],
    },
    preparedRoutesForBreadcrumbs: [],
  };

  it("should render without errors", () => {
    const wrapper = shallow(rComponent(initialProps));

    expect(wrapper).toBeTruthy();
  });

  it("should call siderToggleState action on sider collapsed", () => {
    const mockSiderToggleState: any = jest.fn();
    initialProps.siderToggleState = mockSiderToggleState;

    const wrapper = shallow(rComponent(initialProps));
    const sider = wrapper.find<SiderProps>(Sider);
    const props = sider.props();
    // @ts-ignore
    props.onCollapse(false, "clickTrigger");

    expect(mockSiderToggleState.mock.calls.length).toBeTruthy();
  });
});
