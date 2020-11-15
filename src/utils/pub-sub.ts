interface Type {
  events: { [k: string]: Array<Function> };
  on: (n: string, fn: Function)=>void;
  off: (n: string, fn: Function)=>void;
  emit: (n: string, data: any)=>void;
  haveCurrentEvent: (en: string)=>boolean;
}

const event: Type = {
  events: {},
  haveCurrentEvent(eventName) {
    return !!this.events[eventName];
  },
  on: function(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function(eventName, fn) {
    const isCurrentFunction = (index: number)=>this.events[eventName][index] === fn;

    if (this.haveCurrentEvent(eventName)) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (isCurrentFunction(i)) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  emit: function(eventName, data) {
    if (this.haveCurrentEvent(eventName)) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  },
};

export { event };
