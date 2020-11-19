import { rndResult } from "utils/test";

import { getLayoutConfig, getSiderState, selectNames } from "./selectors";

describe("layout selectors", () => {
  const payloads = {
    [selectNames.config]: rndResult(),
    [selectNames.siderIsOpen]: rndResult(),
  };

  const mockStore = {
    [selectNames.layout]: {
      [selectNames.config]: payloads[selectNames.config],
      [selectNames.siderIsOpen]: payloads[selectNames.siderIsOpen],
    },
  };
  it("invoke without errors::getLayoutConfig", () => {
    const result = getLayoutConfig(mockStore);

    expect(result).toEqual(payloads[selectNames.config]);
  });

  it("invoke without errors::getSiderState", () => {
    const result = getSiderState(mockStore);

    expect(result).toEqual(payloads[selectNames.siderIsOpen]);
  });
});
