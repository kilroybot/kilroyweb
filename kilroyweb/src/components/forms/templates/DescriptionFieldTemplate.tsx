import { Input } from "@mantine/core";
import { DescriptionFieldProps } from "@rjsf/utils";

export type DescriptionFieldTemplateProps = DescriptionFieldProps;

export default function DescriptionFieldTemplate({
  id,
  description,
}: DescriptionFieldTemplateProps) {
  return <Input.Description id={id}>{description}</Input.Description>;
}
