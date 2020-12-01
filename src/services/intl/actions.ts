import { EVENTS } from "./consts";
import { intlEvent } from "./module";

const initIntl = (): boolean => intlEvent.emit(EVENTS.intlInit, null);
const setIntl = (intl: { [k: string]: string }): boolean =>
  intlEvent.emit(EVENTS.intlEnd, intl);

export { initIntl, setIntl };
