import loadableComponent from "@loadable/component";
import pMinDelay from "p-min-delay";
import React from "react";

const cache: {
  [k: string]:
    | undefined
    | { fallback: React.ComponentType | Function }
    | boolean;
} = {};

export const loadable = (
  cacheId: string,
  importFn: () => Promise<any>,
  fallbackFn: () => React.ReactNode,
  delay = 500
): React.ComponentType => {
  const x = fallbackFn();
  return loadableComponent(
    () => {
      if (cache[cacheId]) {
        return importFn();
      }
      cache[cacheId] = true;
      if (delay > 0) {
        return pMinDelay(importFn(), delay);
      }
      return importFn();
    },
    cache[cacheId]
      ? undefined
      : {
          fallback: typeof x === "function" ? x() : x,
        }
  );
};
