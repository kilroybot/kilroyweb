import Form from "./forms/Form";
import validator from "@rjsf/validator-ajv8";
import * as React from "react";
import { RJSFSchema } from "@rjsf/utils";
import * as hash from "object-hash";

export type SchemaBasedFormProps = {
  schema: RJSFSchema;
  data: any;
  onSubmit?: (data: any) => void;
};

export default function SchemaBasedForm({
  schema,
  data,
  onSubmit,
}: SchemaBasedFormProps) {
  const handleSubmit = React.useCallback(
    (data) => {
      onSubmit?.(data.formData);
    },
    [onSubmit]
  );

  return (
    <Form
      key={hash(data)}
      schema={schema}
      formData={data}
      validator={validator}
      onSubmit={handleSubmit}
    />
  );
}
