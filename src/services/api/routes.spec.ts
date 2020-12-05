import { routes } from "./routes";

describe("api routes testing", () => {
  it("should be array of functions", () => {
    expect(() => Object.values(routes).map((fn) => fn())).not.toThrow();
  });
});
