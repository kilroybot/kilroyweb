import * as React from "react";
import { useCallback, useState } from "react";
import Head from "next/head";
import { useLabels } from "../contexts/labels";
import PageLayout from "../components/PageLayout";
import { client, stream } from "../lib/cilroy";
import Segment from "../components/Segment";
import { Button, Loader, Stack } from "@mantine/core";
import PostContent from "../components/posts/PostContent";
import Center from "../components/Center";

export default function Playground() {
  const labels = useLabels();

  const [abortPrevious, setAbortPrevious] = useState<() => void>(() => {});
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<Object>();

  const handleClick = useCallback(async () => {
    setLoading(true);
    if (abortPrevious) abortPrevious();
    const { result, abort } = stream({
      method: client.generatePosts,
      params: { quantity: BigInt(1) },
      reconnectOptions: { infinite: false },
    });
    setAbortPrevious(() => () => abort.abort());
    for await (const response of result) setPost(JSON.parse(response.content));
    setLoading(false);
  }, [abortPrevious, client.generatePosts]);

  return (
    <>
      <Head>
        <title>{labels.playground.title}</title>
      </Head>
      <PageLayout page="playground">
        <Stack spacing="lg">
          {(post || loading) && (
            <Segment>
              {loading ? (
                <Center>
                  <Loader />
                </Center>
              ) : (
                <PostContent content={post} />
              )}
            </Segment>
          )}
          <Segment>
            <Button onClick={handleClick}>
              {labels.playground.buttons.generate}
            </Button>
          </Segment>
        </Stack>
      </PageLayout>
    </>
  );
}
