import { http } from "services/http";

import { routes } from "../routes";
import { account } from "./requests";

const httpGet = jest.spyOn(http, "get").mockImplementation(jest.fn());

describe("testing account requests", () => {
  beforeEach(() => {
    httpGet.mockReset();
  });

  it("should call without errors info request", () => {
    account.info();
    expect(httpGet).toBeCalledWith(routes.account());
  });
});
