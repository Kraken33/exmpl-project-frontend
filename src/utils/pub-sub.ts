import { error } from "./errors";

interface Type {
  events: { [k: string]: Array<Function> };
  on: (n: string, fn: Function) => void;
  off: (n: string, fn: Function) => void;
  emit: (n: string, data: any) => void;
  haveCurrentEvent: (en: string) => boolean;
}

const event: Type = {
  events: {},
  haveCurrentEvent(eventName) {
    return !!this.events[eventName];
  },
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function (eventName, fn) {
    const eventIndex = this.events[eventName].indexOf(fn);
    this.haveCurrentEvent(eventName) && eventIndex >= 0
      ? this.events[eventName].splice(eventIndex, 1)
      : error(`This function is missing in ${eventName} event`);
  },
  emit: function (eventName, data) {
    this.haveCurrentEvent(eventName) &&
      this.events[eventName].forEach(function (fn) {
        fn(data);
      });
  },
};

export { event };
