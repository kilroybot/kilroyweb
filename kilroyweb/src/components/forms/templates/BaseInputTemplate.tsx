import { WidgetProps } from "@rjsf/utils";
import {
  Button,
  Checkbox,
  ColorInput,
  NumberInput,
  PasswordInput,
  Radio,
  Text,
  TextInput,
} from "@mantine/core";
import { countDecimals, getInputProperties } from "../../../lib/utils";
import { DatePicker, TimeInput } from "@mantine/dates";
import DateTimeInput from "../../DateTimeInput";
import dayjs from "../../../lib/dayjs";

export type BaseInputTemplateProps = WidgetProps;

export default function BaseInputTemplate({
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
}: BaseInputTemplateProps) {
  const {
    type: inputType,
    step,
    autoComplete,
    min,
    max,
  } = getInputProperties(schema, type, options);

  const commonAllProps = {
    id: id,
    placeholder: placeholder,
  };

  const commonNotImplementedProps = {
    ...commonAllProps,
    autoComplete: autoComplete,
    autoFocus: autofocus,
    defaultValue: value,
    disabled: true,
    required: required,
    readOnly: true,
  };

  const commonImplementedProps = {
    ...commonAllProps,
    disabled: disabled || readonly,
  };

  const commonButtonProps = {
    ...commonImplementedProps,
    autoFocus: autofocus,
    children: label,
    onBlur: () => onBlur(id, value),
    onClick: () => onChange(value),
    onFocus: () => onFocus(id, value),
    type: inputType as "button" | "submit" | "reset",
  };

  const commonInputProps = {
    ...commonImplementedProps,
    required: required,
    error: hideError ? undefined : Boolean(rawErrors),
  };

  const commonTextBasedInputProps = {
    ...commonInputProps,
    autoComplete: autoComplete,
    autoFocus: autofocus,
    defaultValue: value,
    onBlur: (event) => onBlur(id, event.target.value),
    onFocus: (event) => onFocus(id, event.target.value),
    readOnly: readonly,
    type: inputType as any,
  };

  switch (inputType) {
    case "button":
      return <Button {...commonButtonProps} />;
    case "checkbox":
      return (
        <Checkbox
          {...commonInputProps}
          autoComplete={autoComplete}
          autoFocus={autofocus}
          defaultChecked={value}
          label={
            <Text weight={500} style={{ display: "inline" }}>
              {label}
            </Text>
          }
          labelPosition="left"
          onBlur={(event) => onBlur(id, event.target.checked)}
          onChange={(event) => onChange(event.currentTarget.checked)}
          onFocus={(event) => onFocus(id, event.target.checked)}
          readOnly={readonly}
        />
      );
    case "color":
      return (
        <ColorInput
          {...commonTextBasedInputProps}
          onChange={(value) => onChange(value)}
        />
      );
    case "date":
      return (
        <DatePicker
          {...commonInputProps}
          autoComplete={autoComplete}
          autoFocus={autofocus}
          defaultValue={value ? dayjs.utc(value).toDate() : undefined}
          onBlur={(event) =>
            onBlur(
              id,
              event.target.value
                ? dayjs.utc(event.target.value).toISOString()
                : undefined
            )
          }
          onChange={(value) =>
            onChange(value ? dayjs.utc(value).toISOString() : undefined)
          }
          onFocus={(event) =>
            onFocus(
              id,
              event.target.value
                ? dayjs.utc(event.target.value).toISOString()
                : undefined
            )
          }
          readOnly={readonly}
          type={inputType}
        />
      );
    case "datetime-local":
      return (
        <DateTimeInput
          {...commonInputProps}
          defaultValue={value ? dayjs.utc(value).toDate() : undefined}
          onChange={(value) =>
            onChange(value ? dayjs.utc(value).toISOString() : undefined)
          }
          timeProps={{ clearable: true, withSeconds: true }}
        />
      );
    case "email":
      return (
        <TextInput
          {...commonTextBasedInputProps}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      );
    case "file":
      return (
        <TextInput
          {...commonNotImplementedProps}
          error={
            hideError
              ? undefined
              : ["File input not implemented", ...(rawErrors || [])]
          }
        />
      );
    case "hidden":
      return (
        <TextInput
          {...commonTextBasedInputProps}
          hidden={true}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      );
    case "image":
      return (
        <TextInput
          {...commonNotImplementedProps}
          error={
            hideError
              ? undefined
              : ["Image input not implemented", ...(rawErrors || [])]
          }
        />
      );
    case "month":
      return (
        <TextInput
          {...commonNotImplementedProps}
          error={
            hideError
              ? undefined
              : ["Month input not implemented", ...(rawErrors || [])]
          }
        />
      );
    case "number":
      return (
        <NumberInput
          {...commonTextBasedInputProps}
          hideControls={step === "any"}
          min={min}
          max={max}
          onChange={(value) => onChange(value === undefined ? null : value)}
          precision={step === "any" ? 15 : countDecimals(step)}
          removeTrailingZeros={true}
          step={step === "any" ? 1e-15 : step}
        />
      );
    case "password":
      return (
        <PasswordInput
          {...commonTextBasedInputProps}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      );
    case "radio":
      return (
        <Radio
          {...commonInputProps}
          autoComplete={autoComplete}
          autoFocus={autofocus}
          value={value}
          onBlur={(event) => onBlur(id, event.target.checked)}
          onChange={(event) => onChange(event.currentTarget.checked)}
          onFocus={(event) => onFocus(id, event.target.checked)}
          readOnly={readonly}
        />
      );
    case "range":
      return (
        <TextInput
          {...commonNotImplementedProps}
          error={
            hideError
              ? undefined
              : ["Range input not implemented", ...(rawErrors || [])]
          }
        />
      );
    case "reset":
      return <Button {...commonButtonProps} />;
    case "search":
      return (
        <TextInput
          {...commonTextBasedInputProps}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      );
    case "submit":
      return <Button {...commonButtonProps} />;
    case "tel":
      return (
        <TextInput
          {...commonTextBasedInputProps}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      );
    case "text":
      if (value === undefined) setTimeout(() => onChange(""));
      return (
        <TextInput
          {...commonTextBasedInputProps}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      );
    case "time":
      return (
        <TimeInput
          {...commonInputProps}
          clearable={true}
          defaultValue={
            value ? dayjs.utc(value, "HH:mm:ss").toDate() : undefined
          }
          onChange={(value) =>
            onChange(value ? dayjs.utc(value).format("HH:mm:ss") : undefined)
          }
          withSeconds={true}
        />
      );
    case "url":
      return (
        <TextInput
          {...commonTextBasedInputProps}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      );
    case "week":
      return (
        <TextInput
          {...commonNotImplementedProps}
          error={
            hideError
              ? undefined
              : ["Week input not implemented", ...(rawErrors || [])]
          }
        />
      );
    default:
      return (
        <TextInput
          {...commonTextBasedInputProps}
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      );
  }
}
