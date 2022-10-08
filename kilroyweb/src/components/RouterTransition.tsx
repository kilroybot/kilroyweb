import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  NavigationProgress,
  resetNavigationProgress,
  setNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";

export function RouterTransition() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => startNavigationProgress();
    const handleComplete = () => setNavigationProgress(100);
    const handleError = () => resetNavigationProgress();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
    };
  }, [router.events]);

  return <NavigationProgress autoReset={true} />;
}
