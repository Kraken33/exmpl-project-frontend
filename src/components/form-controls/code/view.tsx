import FormItem from "components/form-item";
import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import { FControlCode } from "./types";

const Component: React.FC<FControlCode> = ({
  input,
  meta,
  type,
  label,
  required,
  ...attributes
}) => {
  return (
    <FormItem required={required} label={label} {...meta}>
      <CodeMirror
        {...attributes}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
        value={input.value}
        onBeforeChange={(_, __, value) => {
          input.onChange(value);
        }}
      />
    </FormItem>
  );
};

export { Component };
