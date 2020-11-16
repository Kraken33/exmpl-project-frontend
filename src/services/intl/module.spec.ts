import { shallow } from "enzyme";
import { useContext, useEffect, useMemo, useState } from "react";
import { r } from "utils/component-test";

import { intlInit, intlSet } from "./actions";
import { DEFAULT_PENDING_NODE } from "./consts";
import { IntlComponent, addIntlState, useIntl } from "./module";

jest.mock("react", () => {
  return {
    ...(jest.requireActual("react") as object),
    useContext: jest.fn(),
    useMemo: jest.fn(),
    useState: jest.fn(),
    useEffect: jest.fn(),
  };
});

describe("testing intl module", () => {
  let useStateMock = jest.fn();
  const hooksImplement = ()=>{
      // @ts-ignore
    useContext.mockImplementation(() => ({}));
    // @ts-ignore
    useMemo.mockImplementation((fn) => fn());
    // @ts-ignore
    useState.mockImplementation((init: any) => [init, useStateMock]);
    // @ts-ignore
    useEffect.mockImplementation((fn: any) => fn());
  };
  beforeEach(() => {
    hooksImplement();
    useStateMock = jest.fn();
  });

  describe("testing intl component", () => {
    it("should render without errors", () => {
      const wrapper = shallow(r(IntlComponent));
      expect(wrapper).toBeTruthy();
    });

    it("should render pendingNode", () => {
      const props: any = {
        pendingNode: DEFAULT_PENDING_NODE,
        pending: true,
      };

      const wrapper = shallow(r(IntlComponent, props));
      expect(wrapper.html()).toContain(props.pendingNode);
    });
  });

  describe("testing intl hook", () => {
    it("should call without errors", () => {
      expect(useIntl()).toBeTruthy();
    });
    it("should return default value when property missing", () => {
      expect(useIntl().test).toEqual(DEFAULT_PENDING_NODE);
    });

    it("should set and return pendingNode when property missing", () => {
      const pendingNode = "pendingNode/";
      expect(useIntl({ pendingNode }).test).toEqual(pendingNode);
    });
  });

  describe("testing intl state HOC", () => {
      
    it("should render without errors", () => {
      const wrapper = shallow(r(addIntlState(() => null)));
      expect(wrapper).toBeTruthy();
    });

    it("should change state when call init trigger", () => {
      shallow(r(addIntlState(() => null)));
      intlInit();
      expect(useStateMock).toBeCalled();
    });

    it("should change state when call set trigger", () => {
        const value = { test: 'test' };
      shallow(r(addIntlState(() => null)));
      intlSet(value);
      expect(useStateMock).toBeCalledWith(value);
    });
  });
});
