import { IStoreState } from "store/types";

import { requestInterceptor } from "./interceptor";

jest.mock("store", () => {
  return {
    store: {
      getState: () =>
        ({
          authenticate: {
            isAuthenticate: true,
            token: "token",
          },
        } as IStoreState),
    },
  };
});

describe("testing axios request interceptor", () => {
  const config = {
    headers: {},
    data: {
      validate: true,
    },
  };
  it("should set token to header", () => {
    const result = requestInterceptor(config);
    expect(result.headers["X-Token"]).toBeTruthy();
  });

  it("should set validate header", () => {
    const result = requestInterceptor(config);
    expect(result.headers["X-Validate-Only"]).toBeTruthy();
  });
});
