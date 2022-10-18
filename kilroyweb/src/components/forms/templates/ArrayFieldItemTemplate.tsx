import { ArrayFieldTemplateItemType } from "@rjsf/utils";
import { Box, Button, createStyles, Grid } from "@mantine/core";
import { cloneElement } from "react";
import { toOrdinal } from "../../../lib/utils";
import { IconArrowDown, IconArrowUp, IconTrash } from "@tabler/icons";

export type ArrayFieldItemTemplateProps = ArrayFieldTemplateItemType;

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "end",
    gap: theme.spacing.md,
  },
  item: {
    flex: 1,
  },
}));

export default function ArrayFieldItemTemplate({
  children,
  disabled,
  hasToolbar,
  hasMoveDown,
  hasMoveUp,
  hasRemove,
  index,
  onDropIndexClick,
  onReorderClick,
  readonly,
}: ArrayFieldItemTemplateProps) {
  const { classes } = useStyles();

  const newChildren = cloneElement(children, {
    uiSchema: { "ui:title": `${toOrdinal(index + 1)} item` },
  });

  return (
    <Box>
      <Grid columns={6} gutter="md">
        <Grid.Col sm="auto">
          <Box>{newChildren}</Box>
        </Grid.Col>
        {hasToolbar && (
          <Grid.Col sm="content" style={{ alignSelf: "end" }}>
            <Button.Group>
              <Button
                variant="default"
                disabled={disabled || readonly || !hasMoveUp}
                onClick={onReorderClick(index, index - 1)}
                fullWidth
              >
                <IconArrowUp size="75%" />
              </Button>
              <Button
                variant="default"
                disabled={disabled || readonly || !hasMoveDown}
                onClick={onReorderClick(index, index + 1)}
                fullWidth
              >
                <IconArrowDown size="75%" />
              </Button>
              <Button
                variant="default"
                disabled={disabled || readonly || !hasRemove}
                onClick={onDropIndexClick(index)}
                fullWidth
              >
                <IconTrash size="75%" />
              </Button>
            </Button.Group>
          </Grid.Col>
        )}
      </Grid>
    </Box>
  );
}
