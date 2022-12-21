import { Input, Stack, Text } from "@mantine/core";
import { FieldTemplateProps as RjsfFieldProps } from "@rjsf/utils";
import FormAccordion from "../FormAccordion";

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
  schema,
}: FieldTemplateProps) {
  const { oneOf } = schema;

  if (oneOf) {
    return (
      <FormAccordion
        header={
          <Input.Wrapper
            description={rawDescription}
            error={
              hideError || rawErrors === undefined ? undefined : (
                <Stack spacing="xs">
                  {rawErrors.map((error, index) => (
                    <Text key={index}>{error}</Text>
                  ))}
                </Stack>
              )
            }
            id={id}
            hidden={hidden}
            label={
              displayLabel ? (
                <Text style={{ display: "inline" }}>{label}</Text>
              ) : undefined
            }
            required={
              Array.isArray(schema.type)
                ? !schema.type.includes("null")
                : required
            }
            styles={{ label: { color: "inherit" } }}
          >
            {}
          </Input.Wrapper>
        }
      >
        {children}
      </FormAccordion>
    );
  }

  return (
    <Input.Wrapper
      description={rawDescription}
      error={
        hideError || rawErrors === undefined ? undefined : (
          <Stack spacing="xs">
            {rawErrors.map((error, index) => (
              <Text key={index}>{error}</Text>
            ))}
          </Stack>
        )
      }
      id={id}
      hidden={hidden}
      label={
        displayLabel ? (
          <Text style={{ display: "inline" }}>{label}</Text>
        ) : undefined
      }
      required={
        Array.isArray(schema.type) ? !schema.type.includes("null") : required
      }
      styles={{ label: { color: "inherit" } }}
    >
      {children}
    </Input.Wrapper>
  );
}
