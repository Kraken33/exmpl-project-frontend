import { authenticateReceive } from "./actions";
import { entryReducer, initialState } from "./reducers";

describe("layout reducer", () => {
  it("should return reducer init state", () => {
    const reducer = entryReducer(undefined, {} as any);

    expect(reducer).toEqual(initialState);
  });

  it("should handle authenticateReceive", () => {
    const reducer = entryReducer(undefined, authenticateReceive({}));

    expect(reducer.isAuthenticate).toEqual(true);
  });
});
