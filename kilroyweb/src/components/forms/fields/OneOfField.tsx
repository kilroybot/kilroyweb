import {
  ErrorSchema,
  FieldProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";
import { createStyles, Paper, Select, Stack } from "@mantine/core";
import { isEmpty, set } from "lodash-es";
import { useCallback, useEffect } from "react";
import useStateRef from "../../../hooks/useStateRef";
import getDefaultFormState from "../../../lib/schema";

export type OneOfFieldProps<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> = FieldProps<T, S, F>;

const useStyles = createStyles((theme) => ({
  error: {
    borderColor: theme.fn.variant({ variant: "filled", color: "red" })
      .background,
  },
}));

export default function OneOfField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({
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
}: OneOfFieldProps<T, S, F>) {
  const { classes, cx } = useStyles();

  const { fields } = registry;

  const { SchemaField } = fields;

  const isNullSchema = (schema: any) => schema?.type === "null";
  const isObjectSchema = (schema: any) => schema?.type === "object";
  const hasConfig = (schema: any) => schema?.properties?.type !== undefined;

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
  }, []);

  useEffect(() => {
    const option = getMatchingOption(0, formData, options);
    setSelectedOption(option.toString());
  }, []);

  const onOptionChange = useCallback(
    (option: any) => {
      const newSelectedOption = parseInt(option, 10);
      const schema = options[newSelectedOption];
      const newFormData = isNullSchema(schema)
        ? null
        : (getDefaultFormState(
            registry.schemaUtils.getValidator(),
            schema,
            undefined
          ) as T);
      setSelectedOption(option);
      setFormData(newFormData);
      onChange(newFormData);
    },
    [onChange, options, registry.schemaUtils]
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
    [errorSchema, onChange, formDataRef.current]
  );

  if (selectedOptionRef.current === undefined) return null;

  const optionSchema = options[selectedOptionRef.current]
    ? {
        ...options[selectedOptionRef.current],
        type: options[selectedOptionRef.current].type || baseType,
      }
    : undefined;

  const isUndefinedOrEmpty = (o: Object) => o === undefined || isEmpty(o);

  const showError =
    !hideError &&
    (isObjectSchema(optionSchema)
      ? Object.values(errorSchema?.["config"] ?? {}).some(
          (e) => !isUndefinedOrEmpty(e)
        )
      : !isUndefinedOrEmpty(errorSchema));

  return (
    <Paper withBorder p="sm" className={cx({ [classes.error]: showError })}>
      <Stack spacing="xs">
        <Select
          data={selectOptions}
          value={selectedOptionRef.current}
          onChange={onOptionChange}
          onBlur={(event) => onBlur(idSchema.$id, event.target.value)}
          onFocus={(event) => onFocus(idSchema.$id, event.target.value)}
        />
        {hasConfig(optionSchema) ? (
          <SchemaField
            key={`${name}__${selectedOptionRef.current}`}
            name={`${name}__${selectedOptionRef.current}`}
            required={true}
            schema={optionSchema.properties?.config || {}}
            uiSchema={{
              ...(uiSchema?.config || {}),
              nested: true,
            }}
            errorSchema={errorSchema?.["config"]}
            idSchema={{
              ...idSchema,
              $id: `${idSchema.$id}${idSeparator || "_"}config`,
            }}
            idPrefix={idPrefix}
            idSeparator={idSeparator}
            formData={formDataRef.current?.["config"]}
            onChange={(value, error) =>
              Object.entries(value).forEach(([key, val]) =>
                onPropertyChange(`config.${key}`, val, error)
              )
            }
            onBlur={onBlur}
            onFocus={onFocus}
            registry={registry}
            disabled={disabled}
            readonly={readonly}
            hideError={hideError}
          />
        ) : (
          !isNullSchema(optionSchema) && (
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
          )
        )}
      </Stack>
    </Paper>
  );
}
