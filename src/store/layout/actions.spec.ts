import { rndResult } from "utils/test";

import {
  fetchLayoutConfig,
  saveLayoutConfig,
  siderToggleState,
} from "./actions";

describe("layout actions", () => {
  it("should invoke without errors::siderToggleState", () => {
    const actionResult = siderToggleState();
    const expectedBody = {
      type: siderToggleState.type,
    };
    expect(actionResult).toEqual(expectedBody);
  });

  it("should invoke without errors::fetchLayoutConfig", () => {
    const actionResult = fetchLayoutConfig();
    const expectedBody = {
      type: fetchLayoutConfig.type,
    };
    expect(actionResult).toEqual(expectedBody);
  });

  it("should invoke without errors::saveLayoutConfig", () => {
    const payload = rndResult();
    const actionResult = saveLayoutConfig(payload);
    const expectedBody = {
      type: saveLayoutConfig.type,
      payload,
    };
    expect(actionResult).toEqual(expectedBody);
  });
});
