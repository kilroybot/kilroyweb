import * as React from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import { Loader, Stack, Title } from "@mantine/core";
import { useFeed } from "../contexts/feed";
import Segment from "../components/Segment";
import Center from "../components/Center";
import Post from "../components/posts/Post";

export default function Feed() {
  const labels = useLabels();
  const { posts } = useFeed();

  const orderedPosts = posts === undefined ? undefined : [...posts].reverse();

  return (
    <>
      <Head>
        <title>{labels.feed.title}</title>
      </Head>
      <PageLayout page="feed">
        {posts === undefined ? (
          <Center>
            <Loader />
          </Center>
        ) : posts.length === 0 ? (
          <Center>
            <Title>{labels.feed.empty}</Title>
          </Center>
        ) : (
          <Stack spacing="lg">
            {orderedPosts.map((post, index) => (
              <Segment key={index}>
                <Post post={post} />
              </Segment>
            ))}
          </Stack>
        )}
      </PageLayout>
    </>
  );
}
