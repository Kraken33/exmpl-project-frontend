import { Route } from "./routes-tree";

describe("testing route create fabric", () => {
  const arg = {
    path: "/",
    page: () => null,
    breadcrumb: "Home",
  };

  it('should create route without errors', ()=>{
    expect(Route(arg)).toBeTruthy();
  });

  it("should create link function from path", () => {
    const result = Route(arg);
    expect(result.link()).toEqual(arg.path);
});
});
