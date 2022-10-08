import { Button, Space } from "@mantine/core";
import { SubmitButtonProps as RjsfSubmitButtonProps } from "@rjsf/utils";

export type SubmitButtonProps = RjsfSubmitButtonProps;

export default function SubmitButton({}: SubmitButtonProps) {
  return (
    <>
      <Space h="md" />
      <Button fullWidth type="submit">
        Submit
      </Button>
    </>
  );
}
