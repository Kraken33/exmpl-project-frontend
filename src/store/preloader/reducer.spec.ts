import { includes } from "lodash/fp";

import { addPreloader, removePreloader } from "./actions";
import { entryReducer, initialState } from "./reducers";

describe("testing preloader reducer", () => {
  it("should init with initial state", () => {
    const result = entryReducer(undefined, { type: "" });
    expect(result).toEqual(initialState);
  });

  it("should add preloader to state", () => {
    const preloaderName = "test";
    const result = entryReducer(undefined, addPreloader({ preloaderName }));
    expect(includes(preloaderName)(result.list)).toBeTruthy();
  });

  it("should remove preloader from state", () => {
    const preloaderName = "test";
    const stateWithPreloader = entryReducer(
      undefined,
      addPreloader({ preloaderName })
    );
    const result = entryReducer(
      stateWithPreloader,
      removePreloader({ preloaderName })
    );
    expect(includes(preloaderName)(result.list)).toBeFalsy();
  });
});
