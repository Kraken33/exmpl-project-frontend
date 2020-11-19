import { shallow } from "enzyme";
import { r } from "utils/component-test";

import { View } from "./view";

describe("testing home component", () => {
  it("should render without errors", () => {
    const wrapper = shallow(r(View));

    expect(wrapper).toBeTruthy();
  });
});
