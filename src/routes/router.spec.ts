import * as router from "./router";

// @TODO finish it
describe("testing buildRoutes fn", () => {
  it("invoke without errors", () => {
    const result = router.buildRouter([] as any);
    expect(result).toBeTruthy();
  });
});
