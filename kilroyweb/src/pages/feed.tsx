import * as React from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import {
  Loader,
  Pagination,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useFeed } from "../contexts/feed";
import Segment from "../components/Segment";
import Center from "../components/Center";
import Post from "../components/posts/Post";

const perPage = 5;

export default function Feed() {
  const [page, setPage] = React.useState(1);

  const theme = useMantineTheme();
  const labels = useLabels();
  const { posts } = useFeed();

  const orderedPosts = posts === undefined ? undefined : [...posts].reverse();

  const totalPages =
    orderedPosts === undefined ? 0 : Math.ceil(orderedPosts.length / perPage);

  const paginatedPosts =
    orderedPosts === undefined
      ? undefined
      : orderedPosts.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <Head>
        <title>{labels.pages.feed.title}</title>
      </Head>
      <PageLayout page="feed">
        {posts === undefined ? (
          <Center>
            <Loader />
          </Center>
        ) : posts.length === 0 ? (
          <Center>
            <Title>{labels.pages.feed.empty}</Title>
          </Center>
        ) : (
          <Stack spacing="lg">
            <Stack spacing="lg">
              {paginatedPosts.map((post, index) => (
                <Segment key={index}>
                  <Post post={post} />
                </Segment>
              ))}
            </Stack>
            <Pagination
              page={page}
              onChange={setPage}
              total={totalPages}
              size="lg"
              grow={true}
              radius={theme.radius[theme.defaultRadius]}
            />
          </Stack>
        )}
      </PageLayout>
    </>
  );
}
