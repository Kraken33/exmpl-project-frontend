import { CreateRoute } from "./routes-tree";

describe("testing route create fabric", () => {
  const arg = {
    path: "/",
    page: () => null,
    breadcrumb: "Home",
  };

  it("should create route without errors", () => {
    expect(CreateRoute(arg)).toBeTruthy();
  });

  it("should create link function from path", () => {
    const result = CreateRoute(arg);
    expect(result.link()).toEqual(arg.path);
  });
});
