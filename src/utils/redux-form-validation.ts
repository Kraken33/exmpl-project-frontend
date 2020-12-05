import { reduce, set } from "lodash/fp";
import { FormState } from "redux-form";

import { store } from "../store";
import { error } from "./errors";

const getFormValues = (formName: string): { [k: string]: string } => {
  const form = store.getState().form[formName] as FormState;
  if (form) {
    const values = form.values || {};
    const fields = form.fields || {};

    return reduce<string, { [k: string]: any }>((acc, key) => {
      acc[key] = values[key] || "";
      return acc;
    }, values)(Object.keys(fields));
  }
  error(`Unknown from name \`${formName}\`. Please, provide correct form name`);
  return {};
};

type ServerError = {
  msg: string;
  param: string;
};

const asyncValidate = ({
  apiHandler,
  formName,
  handler,
}: {
  apiHandler: Function;
  formName: string;
  handler?: Function;
}) => async (): Promise<any> => {
  let values: { [k: string]: any } = {
    ...getFormValues(formName),
  };

  values.validate = true;
  values = handler ? handler(values) : values;
  const data: { errors: ServerError[] } = await apiHandler(values);

  const validateFormatter = (errors: ServerError[]) =>
    errors.reduce((acc: { [k: string]: string }, err: ServerError) => {
      acc = set(err.param.replace(/\.(\d)\./, "[$1]"), err.msg)(acc);
      return acc;
    }, {});

  const errValues = validateFormatter(data.errors);
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  if (Object.keys(errValues).length) throw errValues;
};

export { asyncValidate, getFormValues };
