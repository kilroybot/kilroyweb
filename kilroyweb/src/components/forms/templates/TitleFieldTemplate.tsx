import { TitleFieldProps } from "@rjsf/utils";
import { Input } from "@mantine/core";

export type TitleFieldTemplateProps = TitleFieldProps;

export default function TitleFieldTemplate({
  id,
  title,
  required,
}: TitleFieldTemplateProps) {
  return (
    <Input.Label id={id} required={required}>
      {title}
    </Input.Label>
  );
}
