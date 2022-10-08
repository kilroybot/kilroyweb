import {
  ArrayFieldTemplateProps as RjsfArrayFieldTemplateProps,
  getTemplate,
  getUiOptions,
} from "@rjsf/utils";
import { Input, Paper, Space, Stack, Text } from "@mantine/core";

export type ArrayFieldTemplateProps<T, F> = RjsfArrayFieldTemplateProps<T, F>;

export default function ArrayFieldTemplate<T = any, F = any>({
  canAdd,
  disabled,
  idSchema,
  items,
  onAddClick,
  readonly,
  registry,
  required,
  schema,
  title,
  uiSchema,
}: ArrayFieldTemplateProps<T, F>) {
  const uiOptions = getUiOptions<T, F>(uiSchema);

  const ArrayFieldItemTemplate = getTemplate<"ArrayFieldItemTemplate", T, F>(
    "ArrayFieldItemTemplate",
    registry,
    uiOptions
  );

  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  return (
    <Input.Wrapper
      description={uiOptions.description || schema.description}
      id={`${idSchema.$id}__title`}
      label={<Text style={{ display: "inline" }}>{title}</Text>}
      required={required}
      styles={{ label: { color: "inherit" } }}
    >
      <Paper withBorder p="sm">
        {items.length > 0 && (
          <Stack spacing="xs">
            {items.map(({ key, ...itemProps }) => (
              <ArrayFieldItemTemplate key={key} {...itemProps} />
            ))}
          </Stack>
        )}
        {items.length > 0 && <Space h="md" />}
        {canAdd && (
          <AddButton
            className="array-item-add"
            onClick={onAddClick}
            disabled={disabled || readonly}
            uiSchema={uiSchema}
          />
        )}
      </Paper>
    </Input.Wrapper>
  );
}
