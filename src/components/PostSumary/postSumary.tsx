import { PostHeading } from "../PostHeading/postheading";
import { PostDate } from "../PostDate/postDate";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate dateTime={createdAt} />

      <PostHeading url={postLink} as="h2">
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
