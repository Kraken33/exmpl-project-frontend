import { NODE_ENV } from "consts";

import { error } from "./errors";

describe("testing error function", () => {
  const errorExpression = "Error";

  it("should call without error in production mode", () => {
    // @ts-ignore
    process.env.NODE_ENV = NODE_ENV.production;
    expect(() => error(errorExpression)).not.toThrow();
  });

  it("should call with error in development mode", () => {
    // @ts-ignore
    process.env.NODE_ENV = NODE_ENV.development;
    expect(() => error(errorExpression)).toThrowError();
  });
});
