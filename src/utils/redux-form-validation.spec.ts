import * as utils from "./redux-form-validation";

jest.mock("../store", () => {
  return {
    store: {
      getState: () => ({
        form: {
          test: {
            values: {},
            fields: {
              field: "",
            },
          },
        },
      }),
    },
  };
});

describe("testing redux-form validation util", () => {
  const formName = "test";
  const apiHandler: any = (errors: any[] = []) => () =>
    new Promise((res) => {
      res({ errors });
    });

  it("should return undefied when errors missing", async () => {
    expect(
      await utils.asyncValidate({
        apiHandler: apiHandler(),
        formName,
      })()
    ).toEqual(undefined);
  });

  it("should throw exeption with errors", async () => {
    let err = null;
    const errors: any[] = [
      {
        msg: "msg",
        param: "param",
      },
    ];
    try {
      await utils.asyncValidate({
        apiHandler: apiHandler(errors),
        formName,
      })();
    } catch (e) {
      err = e;
    }
    expect(err).toEqual({ param: "msg" });
  });
});

describe("testing getFormState helper", () => {
  it("should invoke without error with valid form name", () => {
    expect(utils.getFormValues("test")).toEqual({ field: "" });
  });

  it("should throw exception when form missing", () => {
    expect(() => utils.getFormValues("test1")).toThrow();
  });
});
