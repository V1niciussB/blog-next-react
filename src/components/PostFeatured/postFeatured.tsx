import { PostCoverImage } from "../PostCoverImage/postCoverImage";
import { PostSummary } from "../PostSumary/postSumary";
import { findAllPublicPosts } from "@/lib/post/queries";

export async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        href={postLink}
        src={post.coverImageUrl}
        alt={post.title}
      />

      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
