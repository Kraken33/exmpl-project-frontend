import { event } from "./pub-sub";

describe("testing pub-sub function", () => {
  const eventName = "event";

  it("should set event without errors and call it", () => {
    const eventFn = jest.fn();

    event.on(eventName, eventFn);
    event.emit(eventName, "");

    expect(eventFn).toBeCalled();
  });

  it("should remove function from event array", () => {
    const eventFn = jest.fn();

    event.on(eventName, eventFn);
    event.off(eventName, eventFn);
    event.emit(eventName, "");

    expect(eventFn).not.toBeCalled();
  });

  it("should throw error when event function is missing in event array", () => {
    try {
      event.off(eventName, () => {});
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
