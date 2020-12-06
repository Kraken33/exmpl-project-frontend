jest.mock("services/permission", () => ({
  withPermissions: (v: any) => v,
  withAuthentication: (v: any) => v,
}));

jest.mock("layouts", () => ({
  Layouts: {},
}));

import { buildRouter } from "./router";

// @TODO finish it
describe("testing buildRoutes fn", () => {
  it("invoke without errors", () => {
    const result = buildRouter([] as any);
    expect(result).toBeTruthy();
  });
});
