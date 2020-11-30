import React from "react";

function r<T = any>(
  Comp: React.ComponentType<any> | React.FC<any>,
  props?: T
): JSX.Element {
  return <Comp {...props} />;
}
function rProp<T = any>(Comp: React.ComponentType<any> | React.FC<any>) {
  return (props: T): JSX.Element => r(Comp, props);
}

export { r, rProp };
