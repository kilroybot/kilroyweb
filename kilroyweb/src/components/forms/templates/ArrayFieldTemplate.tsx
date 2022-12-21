import {
  ArrayFieldTemplateProps as RjsfArrayFieldTemplateProps,
  FormContextType,
  getTemplate,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";
import { Input, Paper, Space, Stack, Text } from "@mantine/core";
import FormAccordion from "../FormAccordion";

export type ArrayFieldTemplateProps<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> = RjsfArrayFieldTemplateProps<T, S, F>;

export default function ArrayFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({
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
}: ArrayFieldTemplateProps<T, S, F>) {
  const uiOptions = getUiOptions<T, S, F>(uiSchema);

  const ArrayFieldItemTemplate = getTemplate<"ArrayFieldItemTemplate", T, F>(
    "ArrayFieldItemTemplate",
    registry,
    uiOptions
  );

  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  return (
    <FormAccordion
      header={
        <Input.Wrapper
          description={uiOptions.description || schema.description}
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
    </FormAccordion>
  );
}
