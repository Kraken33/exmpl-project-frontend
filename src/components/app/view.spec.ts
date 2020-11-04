import { shallow } from "enzyme";
import { r } from "utils/component-test";

import { View } from "./view";

describe("testing app component", () => {
  const rComponent = r(View);

  it("should render without errors", () => {
    const wrapper = shallow(rComponent);

    expect(wrapper).toBeTruthy();
  });
});
