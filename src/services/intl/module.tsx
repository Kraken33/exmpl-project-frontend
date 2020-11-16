import React, { useEffect, useState, useContext, useMemo } from 'react';

import { event } from 'utils/pub-sub';
import { EVENTS, DEFAULT_PENDING_NODE } from './consts';
import { OuterProps, Dictionary, InnerProps, UseIntlConfig } from './types';

let intlDictionary: Dictionary = null;
const IntlContext = React.createContext(intlDictionary);

const addIntlState = (Component: React.ComponentType<InnerProps & OuterProps>): React.ComponentType<OuterProps> => {
    const Wrapper = (props: OuterProps) => {
        const [dictionary, setDictionary] = useState(intlDictionary);
        const [pending, setPending] = useState(false);
        useEffect(() => {
            const onDictionarySet = (dictionary: Dictionary) => {
                intlDictionary = dictionary;
                setPending(false);
                setDictionary(dictionary);
            };

            const onDictionaryInit = () => {
                intlDictionary = null;
                setPending(true); 
                setDictionary(null);
            }

            event.on(EVENTS.intlInit, onDictionaryInit);
            event.on(EVENTS.intlEnd, onDictionarySet);

            return () => {
                event.off(EVENTS.intlInit, onDictionaryInit);
                event.off(EVENTS.intlEnd, onDictionarySet);
            }
        }, []);

        return <Component {...props} dictionary={dictionary} pending={pending} />;
    }

    return Wrapper;
}

const IntlComponent: React.FC<InnerProps & OuterProps> = ({ children, pending, dictionary, pendingNode }) => {
    const showPreloader = pending && pendingNode;

    return <IntlContext.Provider value={dictionary as any}>
        {children}
        {showPreloader ? pendingNode : null}
    </IntlContext.Provider>;
};

const IntlProvider = addIntlState(IntlComponent);

const _intl = (target: Dictionary) => (key: string) => target ? target[key] : DEFAULT_PENDING_NODE;

const useIntl = (conf: UseIntlConfig = {}) => {
    const { pendingNode = DEFAULT_PENDING_NODE } = conf;
    const intl = useContext(IntlContext);
    const dictionary = useMemo(() => new Proxy(intl || {}, {
        get: (target: Dictionary | any, name) => target?.[name] || pendingNode
    }), [intl, pendingNode]);

    return dictionary;
}; 

const withIntl = (Component: React.ComponentType)=>(props: any)=>{
    const intl = useIntl();

    return <Component {...props} intl={intl} />;
}

const intl = _intl(intlDictionary);

export { IntlProvider, intl, useIntl, withIntl, IntlComponent, addIntlState }