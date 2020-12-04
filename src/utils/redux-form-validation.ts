import { set } from "lodash/fp";
import { FormState } from "redux-form";

import { store } from "../store";

const getFormValues = (formName: string) => {
  const form = store.getState().form[formName] as FormState;
  if (form) {
    const values = form.values || {};
    const fields = form.fields || {};

    for (const field in fields) {
      if (!fields.hasOwnProperty(field)) continue;
      if (!(field in values)) {
        values[field] = "";
      }
    }

    return values;
  }
  console.warn(
    `Unknown from name \`${formName}\`. Please, provide correct form name`
  );
  return {};
};

const asyncValidate = ({
  apiHandler,
  formName,
  handler,
}: {
  apiHandler: Function;
  formName: string;
  handler?: any;
}) => async (): Promise<any> => {
  let values: any = {
    ...getFormValues(formName),
  } as any;
  values.validate = true;
  if (handler) values = handler(values);
  const err: any = await apiHandler(values);
  // eslint-disable-next-line no-shadow
  const validateFormatter = (errors: any) =>
    errors.reduce((acc: any, err: any) => {
      acc = set(err.param.replace(/\.(\d)\./, "[$1]"), err.msg)(acc);
      return acc;
    }, {});
  const errValues = validateFormatter(err.errors);
  console.log(err, errValues, "err.data.data");
  if (Object.keys(errValues).length) throw errValues;
};

export { asyncValidate };
