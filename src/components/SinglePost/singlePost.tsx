import { findPostBySlug } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading/postheading";
import { PostDate } from "../PostDate/postDate";
import { SafeMarkdown } from "../SafeMarkdown/safeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlug(slug);

  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-5 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          width={720}
          height={720}
          alt={post.title}
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>
      <p className="mb-8 text-xl text-slate-600 italic">{post.excerpt}</p>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
