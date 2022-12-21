import {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";
import { MultiSelect, Select } from "@mantine/core";

export type SelectWidgetProps<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> = WidgetProps<T, S, F>;

export default function SelectWidget({
  id,
  options,
  value,
  required,
  disabled,
  readonly,
  multiple = false,
  autofocus = false,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  schema,
}: SelectWidgetProps) {
  const { type } = schema;
  const { enumOptions, enumDisabled = [] } = options;

  const valueToOption = (value: any) => value.toString();

  const optionToValue = (option: any) => {
    if (option === undefined || option === null) return option;
    if (type === "number" || (Array.isArray(type) && type.includes("number")))
      return parseFloat(option);
    if (type === "integer" || (Array.isArray(type) && type.includes("integer")))
      return parseInt(option, 10);
    return option;
  };

  const selectOptions = enumOptions.map(({ value, label }) => ({
    label: label,
    value: valueToOption(value),
    disabled: enumDisabled.includes(value),
  }));

  const selectedOption = value ? valueToOption(value) : undefined;

  if (multiple) {
    return (
      <MultiSelect
        autoFocus={autofocus}
        data={selectOptions}
        defaultValue={selectedOption}
        disabled={disabled || readonly}
        id={id}
        onBlur={(event) => onBlur(id, optionToValue(event.target.value))}
        onChange={(values) =>
          onChange(values.map((value) => optionToValue(value)))
        }
        onFocus={(event) => onFocus(id, optionToValue(event.target.value))}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
      />
    );
  }

  return (
    <Select
      autoFocus={autofocus}
      data={selectOptions}
      disabled={disabled || readonly}
      defaultValue={selectedOption}
      id={id}
      onBlur={(event) => onBlur(id, optionToValue(event.target.value))}
      onChange={(value) => onChange(optionToValue(value))}
      onFocus={(event) => onFocus(id, optionToValue(event.target.value))}
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
    />
  );
}
