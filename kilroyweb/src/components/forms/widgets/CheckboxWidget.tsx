import { Checkbox, Text } from "@mantine/core";
import {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";
import { getInputProperties } from "../../../lib/utils";

export type CheckboxWidgetProps<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> = WidgetProps<T, S, F>;

export default function CheckboxWidget({
  id,
  value,
  placeholder,
  required,
  disabled,
  hideError,
  readonly,
  autofocus,
  label,
  onChange,
  onBlur,
  onFocus,
  rawErrors,
  schema,
  options,
  type,
}: CheckboxWidgetProps) {
  const { autoComplete } = getInputProperties(schema, type, options);

  return (
    <Checkbox
      autoComplete={autoComplete}
      autoFocus={autofocus}
      defaultChecked={value}
      disabled={disabled || readonly}
      id={id}
      label={
        <Text weight={500} style={{ display: "inline" }}>
          {label}
        </Text>
      }
      labelPosition="left"
      onBlur={(event) => onBlur(id, event.target.checked)}
      onChange={(event) => onChange(event.currentTarget.checked)}
      onFocus={(event) => onFocus(id, event.target.checked)}
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
      error={hideError ? undefined : Boolean(rawErrors)}
    />
  );
}
