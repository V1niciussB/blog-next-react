import { PostCoverImage } from "../PostCoverImage/postCoverImage";
import { PostSummary } from "../PostSumary/postSumary";
import { findAllPublicPosts } from "@/lib/post/queries";

export async function PostList() {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1 mb-16 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              href={postLink}
              src={post.coverImageUrl}
              alt={post.title}
            />

            <PostSummary
              postLink={postLink}
              postHeading="h2"
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
