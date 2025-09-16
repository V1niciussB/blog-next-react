import { PostFeatured } from "@/components/PostFeatured/postFeatured";
import { PostList } from "@/components/PostList/postList";
import { SpinLoader } from "@/components/SpinLoader/spinloader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />

        <PostList />
      </Suspense>
    </>
  );
}
