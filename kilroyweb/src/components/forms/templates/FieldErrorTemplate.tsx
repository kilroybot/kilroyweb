import { Input } from "@mantine/core";
import { FieldErrorProps } from "@rjsf/utils";

export type FieldErrorTemplateProps = FieldErrorProps;

export default function FieldErrorTemplate({
  errors,
}: FieldErrorTemplateProps) {
  return <Input.Error>{errors}</Input.Error>;
}
