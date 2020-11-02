import React from 'react';
import { curry } from 'lodash/fp';

const r = (Comp: React.ComponentType<any> | React.FC<any>, props?: any)=><Comp {...props}/>;
const rProp: any = curry(r);

export {
    r,
    rProp
};