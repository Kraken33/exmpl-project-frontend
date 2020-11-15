import { FormItemProps } from 'antd/lib/form';

export enum ETypes {
    'input' = 'input',
    'switch' = 'switch',
    'code' = 'code'
};

export type Types = keyof typeof ETypes;

export interface Dictionary {
    [k: string]: any;
}

export type Control = {
    type: Types;
} & FormItemProps;