import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage/postCoverImage";
import { PostHeading } from "../PostHeading/postheading";

export async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              href={post?.slug ? `/post/${post.slug}` : "#"}
              src={post.coverImageUrl}
              alt={post.title}
            />

            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-600 text-sm/tight"
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>

              <PostHeading url="#" as="h2">
                {post.title}
              </PostHeading>

              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
