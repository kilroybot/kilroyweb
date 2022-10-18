import { Post as PostData } from "../../lib/protobuf";
import { Container, createStyles, Stack, Text } from "@mantine/core";
import dayjs from "../../lib/dayjs";
import * as React from "react";
import PostContent from "./PostContent";

export type PostProps = {
  post: PostData;
};

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: theme.spacing.xl,
    alignItems: "baseline",
    justifyContent: "space-between",
    padding: 0,
  },
}));

export default function Post({ post }: PostProps) {
  const { classes } = useStyles();

  return (
    <Stack>
      <Container className={classes.container}>
        <Text
          size="xs"
          weight="bold"
          component="a"
          variant="link"
          color="dimmed"
          href={post.url}
          target="_blank"
        >
          {post.id}
        </Text>
        <Text
          size="xs"
          variant="link"
          color="dimmed"
          component="a"
          href={post.url}
          target="_blank"
        >
          {dayjs.utc(post.createdAt).toString()}
        </Text>
      </Container>
      <PostContent content={JSON.parse(post.content)} />
    </Stack>
  );
}
