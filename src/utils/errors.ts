import { NODE_ENV } from "consts";

const error = (err: string) => {
  if (process.env.NODE_ENV !== NODE_ENV.production) throw new Error(err);
  else console.error(err);
};

export { error };
