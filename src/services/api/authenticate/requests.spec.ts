import { http } from "services/http";

import { routes } from "../routes";
import { authenticate } from "./requests";

const httpPost = jest.spyOn(http, "post").mockImplementation(jest.fn());

describe("testing autheticate requests", () => {
  beforeEach(() => {
    httpPost.mockReset();
  });

  it("should call without errors login request", () => {
    const credintals = { login: "log", password: "pass" };
    authenticate.login(credintals);

    expect(httpPost).toBeCalledWith(routes.login(), credintals);
  });

  it("should call without errors signUp request", () => {
    const credintals = { login: "log", password: "pass" };
    authenticate.signUp(credintals);

    expect(httpPost).toBeCalledWith(routes.signUp(), credintals);
  });
});
