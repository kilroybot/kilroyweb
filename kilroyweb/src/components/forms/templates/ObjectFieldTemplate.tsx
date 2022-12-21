import { Input, Paper, Space, Stack, Text } from "@mantine/core";
import {
  canExpand,
  FormContextType,
  ObjectFieldTemplateProps as RjsfObjectFieldTemplateProps,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";
import FormAccordion from "../FormAccordion";

export type ObjectFieldTemplateProps<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> = RjsfObjectFieldTemplateProps<T, S, F>;

export default function ObjectFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({
  description,
  disabled,
  formData,
  idSchema,
  onAddClick,
  properties,
  readonly,
  registry,
  required,
  schema,
  title,
  uiSchema,
}: ObjectFieldTemplateProps<T, S, F>) {
  const { nested } = uiSchema;

  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  const sortedProperties = properties.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  if (nested || idSchema.$id === "root") {
    return (
      <Stack spacing="xs">{sortedProperties.map((prop) => prop.content)}</Stack>
    );
  }

  return (
    <FormAccordion
      header={
        <Input.Wrapper
          description={description}
          id={`${idSchema.$id}__title`}
          label={<Text style={{ display: "inline" }}>{title}</Text>}
          required={required}
          styles={{ label: { color: "inherit" } }}
        >
          {}
        </Input.Wrapper>
      }
    >
      <Paper withBorder p="sm">
        <Stack spacing="xs">
          {sortedProperties.map((prop) => prop.content)}
        </Stack>
        {canExpand(schema, uiSchema, formData) && (
          <>
            {sortedProperties.length > 0 && <Space h="md" />}
            <AddButton
              className="object-property-expand"
              onClick={onAddClick(schema)}
              disabled={disabled || readonly}
              uiSchema={uiSchema}
            />
          </>
        )}
      </Paper>
    </FormAccordion>
  );
}
