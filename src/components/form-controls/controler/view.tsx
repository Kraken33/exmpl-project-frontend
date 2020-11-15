import React from 'react';
import { Field } from 'redux-form';

import { Types, Dictionary, Control } from './types';

import { default as Input } from '../input';
import { default as Switch } from '../switch';
import { default as Code } from '../code';

const Component: React.FC<Control> = ({ type, ...props })=>{

    const typeSwitcher = (type: Types)=>{
        const typesDictionary: Dictionary = {
            input: Input,
            switch: Switch,
            code: Code
        };

        return typesDictionary[type] || Input;
    }

    return <Field
        {...props as any}
        type={type}
        component={typeSwitcher(type)}
    />
};

export { Component };