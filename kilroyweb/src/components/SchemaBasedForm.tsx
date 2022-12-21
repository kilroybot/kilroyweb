import Form from "./forms/Form";
import validator from "@rjsf/validator-ajv8";
import * as React from "react";
import { RJSFSchema, RJSFValidationError } from "@rjsf/utils";
import * as hash from "object-hash";
import { Button, Space } from "@mantine/core";
import { useToasts } from "../contexts/toasts";

export type SchemaBasedFormProps = {
  schema: RJSFSchema;
  data: any;
  submit: {
    label?: string;
    loading?: boolean;
    onSubmit?: (data: any) => void;
  };
};

export default function SchemaBasedForm({
  schema,
  data,
  submit,
}: SchemaBasedFormProps) {
  const toasts = useToasts();

  const { label = "Submit", loading = false, onSubmit } = submit;

  const handleSubmit = React.useCallback(
    (data) => {
      onSubmit?.(data.formData);
    },
    [onSubmit]
  );

  const transformErrors = React.useCallback((errors: RJSFValidationError[]) => {
    return [...new Map(errors.map((error) => [error.stack, error])).values()];
  }, []);

  return (
    <Form
      key={hash(data)}
      schema={schema}
      formData={data}
      validator={validator}
      onSubmit={handleSubmit}
      noHtml5Validate
      showErrorList={false}
      transformErrors={transformErrors}
      onError={(errors) => {
        errors.forEach((error) => toasts.error(error.stack));
      }}
    >
      <Space h="md" />
      <Button fullWidth type="submit" loading={loading}>
        {label}
      </Button>
    </Form>
  );
}
