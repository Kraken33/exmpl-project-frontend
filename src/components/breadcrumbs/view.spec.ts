import { Breadcrumb } from "antd";
import { shallow } from "enzyme";
import { rProp } from "utils/component-test";

import { BreadcrumbComponent } from "./types";
import { Component } from "./view";

describe("testing breadcrumb component", () => {
  const rComponent = rProp(Component);

  it("should render without errors", () => {
    const wrapper = shallow(rComponent({ breadcrumbs: null }));

    expect(wrapper).toBeTruthy();
  });

  it("should render all items", () => {
    const props: BreadcrumbComponent = {
      breadcrumbs: [
        {
          breadcrumb: {
            key: "123",
            get() {
              return "Breadcrumb";
            },
          },
          match: {
            url: "https://",
          },
        },
      ],
    };
    const wrapper = shallow(rComponent(props));

    expect(wrapper.find(Breadcrumb.Item).length).toBeTruthy();
  });
});
