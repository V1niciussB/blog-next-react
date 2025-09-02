import { Container } from "@/components/Container/container";
import { Header } from "@/components/Header/header";
import { PostCoverImage } from "@/components/PostCoverImage/postCoverImage";
import { PostHeading } from "@/components/PostHeading/postheading";
import { PostList } from "@/components/PostList/postList";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          href="#"
          src="/images/bryen_6.png"
          alt="titulo da materia"
        />

        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2025-05-25">
            20/05/05 10:30
          </time>

          <PostHeading url="#">Nome da materia </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laboriosam nemo aut sunt deleniti esse facere ducimus enim, officia
            necessitatibus animi quam. Sunt iusto nostrum sit laborum natus
            error aut.
          </p>
        </div>
      </section>

      <PostList />

      <footer>
        <p className="text-6xl font-bold text-center py-8">Aqui é o footer </p>
      </footer>
    </Container>
  );
}
