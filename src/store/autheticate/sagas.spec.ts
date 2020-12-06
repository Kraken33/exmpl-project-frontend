import { head, last } from "lodash/fp";
import { runSaga } from "redux-saga";
import { AvailableRoutes } from "routes";
import { api } from "services";
import * as permissionActions from "services/permission/actions";
import { addPreloader, removePreloader } from "store/preloader";
import * as location from "utils/location";

import { authenticateReceive } from "./actions";
import { authentication } from "./sagas";

describe("testing authenticate saga", () => {
  const type = "";
  const payload = { login: "", password: "" };
  const dispatched: any[] = [];
  const loginResponse = { token: "", permissions: [] };
  const loginRequest = jest
    .spyOn(api.authenticate, "login")
    .mockImplementation(jest.fn().mockReturnValue(loginResponse));
  const setPermissionAction = jest
    .spyOn(permissionActions, "setPermissions")
    .mockImplementation(jest.fn());
  const redirect = jest
    .spyOn(location, "redirect")
    .mockImplementation(jest.fn());

  const resolveSaga = async () =>
    runSaga<any, any, any>(
      {
        dispatch: (action: any) => dispatched.push(action),
        getState: () => ({ state: "test" }),
      },
      authentication,
      { payload, type }
    ).toPromise();

  it("should add preloader", async () => {
    await resolveSaga();
    expect(head(dispatched)).toEqual(addPreloader({ preloaderName: type }));
  });

  it("should remove preloader", async () => {
    await resolveSaga();
    expect(last(dispatched)).toEqual(removePreloader({ preloaderName: type }));
  });

  it("call login request", async () => {
    await resolveSaga();
    expect(loginRequest).toBeCalled();
  });

  it("should dispatch authenticateReceive action", async () => {
    await resolveSaga();
    expect(dispatched[1]).toEqual(authenticateReceive(loginResponse));
  });

  it("should save permissions", async () => {
    await resolveSaga();
    expect(setPermissionAction).toBeCalledWith(loginResponse.permissions);
  });

  it("should redirect to home page if login success", async () => {
    await resolveSaga();
    expect(redirect).toBeCalledWith(AvailableRoutes.home);
  });
});
