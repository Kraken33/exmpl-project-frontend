import { EventEmitter } from "events";

import React, { useContext, useEffect, useMemo, useState } from "react";

import { DEFAULT_PENDING_NODE, EVENTS } from "./consts";
import { Dictionary, InnerProps, OuterProps, UseIntlConfig } from "./types";

const createEvent = () => new EventEmitter();

const intlEvent = createEvent();

let intlDictionary: Dictionary = null;
const IntlContext = React.createContext(intlDictionary);

const addIntlState = (
  Component: React.ComponentType<InnerProps & OuterProps>
): React.ComponentType<OuterProps> => {
  const Wrapper = (props: OuterProps) => {
    const [dictionary, setDictionary] = useState(intlDictionary);
    const [pending, setPending] = useState(false);
    useEffect(() => {
      const onDictionarySet = (currentDictionary: Dictionary) => {
        intlDictionary = currentDictionary;
        setPending(false);
        setDictionary(currentDictionary);
      };

      const onDictionaryInit = () => {
        intlDictionary = null;
        setPending(true);
        setDictionary(null);
      };

      intlEvent.on(EVENTS.intlInit, onDictionaryInit);
      intlEvent.on(EVENTS.intlEnd, onDictionarySet);

      return () => {
        intlEvent.removeAllListeners();
      };
    }, []);

    return <Component {...props} dictionary={dictionary} pending={pending} />;
  };

  return Wrapper;
};

const IntlComponent: React.FC<InnerProps & OuterProps> = ({
  children,
  pending,
  dictionary,
  pendingNode,
}) => {
  const showPreloader = pending && pendingNode;

  return (
    <IntlContext.Provider value={dictionary as any}>
      {children}
      {showPreloader ? pendingNode : null}
    </IntlContext.Provider>
  );
};

const IntlProvider = addIntlState(IntlComponent);

const intlSelector = (target: Dictionary, options?: any) => (key: string) => {
  return target
    ? target[key] || key
    : options?.pendingNode || DEFAULT_PENDING_NODE;
};

const useIntl = (conf: UseIntlConfig = {}): { [k: string]: string } => {
  const { pendingNode = DEFAULT_PENDING_NODE } = conf;
  const intl = useContext(IntlContext);
  const dictionary = useMemo(
    () =>
      new Proxy(intl || {}, {
        get: (target: Dictionary | any, name: any) => {
          return intlSelector(Object.keys(target).length ? target : null, {
            pendingNode,
          })(name);
        },
      }),
    [intl, pendingNode]
  );

  return dictionary;
};

const withIntl = (
  Component:
    | React.ComponentType<
        { [k: string]: any } & { intl: { [k: string]: string } }
      >
    | React.FC
) => (props: { [k: string]: any }): React.ReactNode => {
  const intl = useIntl();

  return <Component {...props} intl={intl} />;
};

const intl = intlSelector(intlDictionary);

export {
  IntlProvider,
  intl,
  useIntl,
  withIntl,
  IntlComponent,
  addIntlState,
  intlEvent,
};
