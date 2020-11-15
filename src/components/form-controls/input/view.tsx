import React from 'react';
import { Input } from "antd";
import FormItem from 'components/form-item';

import { FControlInput } from './types';

const { TextArea } = Input;

const Component: React.FC<FControlInput> = ({ input, meta, type, label, required, ...attributes }) => {
  return (
    <FormItem required={required} label={label} {...meta}>
      {type === "textarea" ? (
        <TextArea {...input} {...attributes as any} />
      ) : (
          <Input {...input} {...attributes as any} type={type} />
        )}
    </FormItem>
  );
}

export { Component };