import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { postsTable } from "@/db/drizzle/schemas";
import { drizzleDb } from "@/db/drizzle";
import { desc } from "drizzle-orm";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log("\n", "findAllPublic", "\n");

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log("\n", "findBySlugPublic", "\n");

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error("Post não encontrado para slug");

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    console.log("\n", "findAll", "\n");

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log("\n", "findById", "\n");

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post não encontrado para ID");

    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   // const posts = await repo.findAllPublic();

//   // posts.forEach((post) => console.log(post.slug, post.published));
// })();
