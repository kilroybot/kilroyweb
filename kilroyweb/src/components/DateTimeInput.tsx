import {
  DatePicker,
  DatePickerProps,
  TimeInput,
  TimeInputProps,
} from "@mantine/dates";
import { Group, Input, InputWrapperProps } from "@mantine/core";
import { useCallback, useState } from "react";

export type DateTimeInputProps = Omit<
  InputWrapperProps,
  "children" | "defaultValue" | "onChange"
> & {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?(value: Date | null): void;
  dateProps?: Omit<DatePickerProps, "value" | "defaultValue">;
  timeProps?: Omit<TimeInputProps, "value" | "defaultValue">;
};

export default function DateTimeInput({
  value,
  defaultValue,
  onChange,
  dateProps = {},
  timeProps = {},
  ...props
}: DateTimeInputProps) {
  const { onChange: dateOnChange, ...otherDateProps } = dateProps;
  const { onChange: timeOnChange, ...otherTimeProps } = timeProps;

  const [date, setDate] = useState(value || defaultValue);
  const [time, setTime] = useState(value || defaultValue);

  const handleChange = useCallback(
    (date?: Date, time?: Date) => {
      const now = new Date();
      const datetime = new Date(
        date?.getFullYear() ?? now.getFullYear(),
        date?.getMonth() ?? now.getMonth(),
        date?.getDate() ?? now.getDate(),
        time?.getHours() ?? now.getHours(),
        time?.getMinutes() ?? now.getMinutes(),
        time?.getSeconds() ?? now.getSeconds(),
        time?.getMilliseconds() ?? now.getMilliseconds()
      );
      onChange?.(datetime);
    },
    [onChange]
  );

  const handleDateChange = useCallback(
    (date?: Date) => {
      setDate(date);
      handleChange(date, time);
      dateOnChange?.(date);
    },
    [handleChange, dateOnChange, time]
  );

  const handleTimeChange = useCallback(
    (time?: Date) => {
      setTime(time);
      handleChange(date, time);
      timeOnChange?.(time);
    },
    [date, handleChange, timeOnChange]
  );

  return (
    <Input.Wrapper {...props}>
      <Group grow>
        <DatePicker
          value={date}
          onChange={handleDateChange}
          {...otherDateProps}
        />
        <TimeInput
          value={time}
          onChange={handleTimeChange}
          {...otherTimeProps}
        />
      </Group>
    </Input.Wrapper>
  );
}
