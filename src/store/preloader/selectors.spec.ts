import { set } from "lodash/fp";

import { hasPreloader, preloaderNames, selectNames } from "./selectors";

describe("testing hasPreloader selector", () => {
  it("should return true if have preloader name in array of preloader name", () => {
    const preloader = "testName";
    const state: any = set(`${selectNames.preloader}.${selectNames.list}`, [
      preloader,
    ])({});

    expect(hasPreloader(state, preloader)).toBeTruthy();
  });

  it("should return false if preloader name missing in array of preloader name", () => {
    const preloader = "testName";
    const state: any = set(
      `${selectNames.preloader}.${selectNames.list}`,
      []
    )({});

    expect(hasPreloader(state, preloader)).toBeFalsy();
  });
});

describe("testing preloaderNames selector", () => {
  const preloader = "testName";
  it("should wrap preloader name in array when preloaders missing", () => {
    expect(preloaderNames(null, preloader)).toEqual([preloader]);
  });
});
