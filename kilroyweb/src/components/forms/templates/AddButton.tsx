import { Button } from "@mantine/core";
import { IconButtonProps } from "@rjsf/utils";
import { IconPlus } from "@tabler/icons";

export type AddButtonProps = IconButtonProps;

export default function AddButton({ disabled, onClick }: AddButtonProps) {
  return (
    <Button
      disabled={disabled}
      fullWidth
      leftIcon={<IconPlus />}
      onClick={onClick}
    >
      Add
    </Button>
  );
}
