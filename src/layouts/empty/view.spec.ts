import { shallow } from "enzyme";
import { r } from "utils/component-test";

import { View } from "./view";

describe("testing empty layout component", () => {
  it("should render without errors", () => {
    const shWrapper = shallow(r(View));

    expect(shWrapper).toBeTruthy();
  });
});
