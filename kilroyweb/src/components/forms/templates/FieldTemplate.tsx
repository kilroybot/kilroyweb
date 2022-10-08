import { Input, Text } from "@mantine/core";
import { FieldTemplateProps as RjsfFieldProps } from "@rjsf/utils";

export type FieldTemplateProps = RjsfFieldProps;

export default function FieldTemplate({
  children,
  displayLabel,
  hidden,
  hideError,
  id,
  label,
  rawDescription,
  rawErrors,
  required,
}: FieldTemplateProps) {
  return (
    <Input.Wrapper
      description={rawDescription}
      error={hideError ? undefined : rawErrors}
      id={id}
      hidden={hidden}
      label={
        displayLabel ? (
          <Text style={{ display: "inline" }}>{label}</Text>
        ) : undefined
      }
      required={required}
      styles={{ label: { color: "inherit" } }}
    >
      {children}
    </Input.Wrapper>
  );
}
