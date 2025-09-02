import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
  href: string;
  src: string;
  alt: string;
};

export function PostCoverImage({ href, src, alt }: PostCoverImageProps) {
  return (
    <Link className="w-full h-full overflow-hidden rounded-xl" href={href}>
      <Image
        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        src={src}
        width={1200}
        height={720}
        alt={alt}
        priority
      />
    </Link>
  );
}
