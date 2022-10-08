import { ErrorSchema, FieldProps, guessType, RJSFSchema } from "@rjsf/utils";
import { Paper, Select, Stack } from "@mantine/core";
import { set, unset } from "lodash-es";
import { useCallback, useEffect } from "react";
import useStateRef from "../../../hooks/useStateRef";

export type OneOfFieldProps<T, F> = FieldProps<T, F>;

export default function OneOfField<T = any, F = any>({
  baseType,
  disabled = false,
  errorSchema = {},
  formContext,
  formData,
  hideError = false,
  idSchema,
  idPrefix,
  idSeparator,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  readonly = false,
  registry,
  uiSchema,
}: OneOfFieldProps<T, F>) {
  const { fields } = registry;

  const { SchemaField } = fields;

  const getMatchingOption = (
    selectedOption: number,
    formData: T,
    options: RJSFSchema[]
  ) => {
    const { schemaUtils } = registry;
    const option = schemaUtils.getMatchingOption(formData, options);
    return option !== 0 ? option : selectedOption || 0;
  };

  const selectOptions = options.map((option, index) => ({
    label: option.title || `Option ${index + 1}`,
    value: index.toString(),
  }));

  const [, setFormData, formDataRef] = useStateRef<T>();
  const [, setSelectedOption, selectedOptionRef] = useStateRef<string>();

  useEffect(() => {
    setFormData(formData);
  }, [formData, setFormData]);

  useEffect(() => {
    const option = getMatchingOption(0, formDataRef.current, options);
    setSelectedOption(option.toString());
  }, [formDataRef.current, setSelectedOption, options]);

  const onOptionChange = useCallback(
    (option: any) => {
      const newSelectedOption = parseInt(option, 10);
      const newOption = registry.schemaUtils.retrieveSchema(
        options[newSelectedOption],
        formDataRef.current
      );

      let newFormData: T | undefined = undefined;
      if (
        guessType(formDataRef.current) === "object" &&
        (newOption.type === "object" || newOption.properties)
      ) {
        newFormData = structuredClone(formDataRef.current);

        const optionsToDiscard = options.slice();
        optionsToDiscard.splice(selectedOptionRef.current, 1);

        for (const option of optionsToDiscard) {
          if (option.properties) {
            for (const key in option.properties) {
              if (key in newFormData) {
                unset(newFormData, key);
              }
            }
          }
        }
      }

      newFormData = registry.schemaUtils.getDefaultFormState(
        options[newSelectedOption]
      ) as T;
      onChange(newFormData);
      setFormData(newFormData);
      setSelectedOption(option);
    },
    [
      onChange,
      options,
      registry.schemaUtils,
      setFormData,
      formDataRef.current,
      setSelectedOption,
      selectedOptionRef.current,
    ]
  );

  const onPropertyChange = useCallback(
    (path: string, value: any, nestedErrorSchema?: ErrorSchema<T>) => {
      const newFormData = structuredClone(formDataRef.current);
      set(newFormData as object, path, value);
      const newErrorSchema = structuredClone(errorSchema);
      set(newErrorSchema as object, path, nestedErrorSchema);
      setFormData(newFormData);
      onChange?.(newFormData, newErrorSchema);
    },
    [errorSchema, onChange, setFormData, formDataRef.current]
  );

  if (
    formDataRef.current === undefined ||
    selectedOptionRef.current === undefined
  ) {
    return null;
  }

  const optionSchema = options[selectedOptionRef.current]
    ? {
        ...options[selectedOptionRef.current],
        type: options[selectedOptionRef.current].type || baseType,
      }
    : undefined;

  return (
    <Paper withBorder p="sm">
      <Stack spacing="xs">
        <Select
          data={selectOptions}
          value={selectedOptionRef.current}
          onChange={onOptionChange}
          onBlur={(event) => onBlur(idSchema.$id, event.target.value)}
          onFocus={(event) => onFocus(idSchema.$id, event.target.value)}
        />
        {optionSchema.type === "object"
          ? optionSchema.properties?.type
            ? Object.keys(
                optionSchema.properties?.config?.properties || {}
              ).map((key) => (
                <SchemaField
                  key={`${name}__${selectedOptionRef.current}__${key}`}
                  name={`${name}__${selectedOptionRef.current}__${key}`}
                  required={optionSchema.properties?.config?.required?.includes(
                    key
                  )}
                  schema={optionSchema.properties?.config?.properties?.[key]}
                  uiSchema={uiSchema?.config?.[key] || {}}
                  errorSchema={errorSchema?.["config"]?.[key] || {}}
                  idSchema={idSchema?.["config"]?.[key] || {}}
                  formData={formDataRef.current?.["config"]?.[key]}
                  onChange={(value, error) =>
                    onPropertyChange(`config.${key}`, value, error)
                  }
                  onBlur={onBlur}
                  onFocus={onFocus}
                  registry={registry}
                  disabled={disabled}
                  readonly={readonly}
                />
              ))
            : Object.keys(optionSchema.properties || {}).map((key) => (
                <SchemaField
                  key={`${name}__${selectedOptionRef.current}__${key}`}
                  name={`${name}__${selectedOptionRef.current}__${key}`}
                  required={optionSchema.required?.includes(key)}
                  schema={optionSchema.properties?.[key]}
                  uiSchema={uiSchema?.[key] || {}}
                  errorSchema={errorSchema?.[key] || {}}
                  idSchema={idSchema?.[key] || {}}
                  formData={formDataRef.current?.[key]}
                  onChange={(value, error) =>
                    onPropertyChange(key, value, error)
                  }
                  onBlur={onBlur}
                  onFocus={onFocus}
                  registry={registry}
                  disabled={disabled}
                  readonly={readonly}
                />
              ))
          : optionSchema.type !== "null" && (
              <SchemaField
                name={name}
                schema={optionSchema}
                uiSchema={uiSchema}
                errorSchema={errorSchema}
                idSchema={idSchema}
                idPrefix={idPrefix}
                idSeparator={idSeparator}
                formData={formDataRef.current}
                formContext={formContext}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                registry={registry}
                disabled={disabled}
                readonly={readonly}
                hideError={hideError}
              />
            )}
      </Stack>
    </Paper>
  );
}
