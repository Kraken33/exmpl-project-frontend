import { event } from 'utils/pub-sub';
import { EVENTS } from './consts';

const intlInit = event.emit.bind(event, EVENTS.intlInit, null);

const intlSet = event.emit.bind(event, EVENTS.intlEnd);

export {
    intlInit,
    intlSet
};