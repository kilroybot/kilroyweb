import { Input, Paper, Space, Stack, Text } from "@mantine/core";
import {
  canExpand,
  ObjectFieldTemplateProps as RjsfObjectFieldTemplateProps,
} from "@rjsf/utils";

export type ObjectFieldTemplateProps<T, F> = RjsfObjectFieldTemplateProps<T, F>;

export default function ObjectFieldTemplate<T = any, F = any>({
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
}: ObjectFieldTemplateProps<T, F>) {
  const { properties: schemaProperties = {} } = schema;

  const propertiesOrderScore = properties.reduce((acc, property) => {
    const propertySchema = schemaProperties[property.name] || {};
    const { propertyType } = propertySchema;
    const score =
      propertyType === "array" ? 0 : propertyType === "object" ? 1 : 2;
    return { ...acc, [property.name]: score };
  }, {});

  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  const sortedProperties = properties.sort(
    (a, b) => propertiesOrderScore[a.name] - propertiesOrderScore[b.name]
  );

  if (idSchema.$id === "root") {
    return (
      <Stack spacing="xs">{sortedProperties.map((prop) => prop.content)}</Stack>
    );
  }

  return (
    <Input.Wrapper
      description={description}
      id={`${idSchema.$id}__title`}
      label={<Text style={{ display: "inline" }}>{title}</Text>}
      required={required}
      styles={{ label: { color: "inherit" } }}
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
    </Input.Wrapper>
  );
}
