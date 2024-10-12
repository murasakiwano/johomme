// place files you want to import through the `$lib` alias in this folder.

import { error } from "@sveltejs/kit";
import type { Post } from "./types";

export function getPosts() {
  let posts: Post[] = [];

  const paths = import.meta.glob("/src/posts/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "").replaceAll(" ", "-").toLowerCase();

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const post = { ...metadata, slug } satisfies Post;
      if (post.published) posts.push(post);
    }
  }

  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

  return posts;
}

export async function getPost(slug: string): Promise<Post> {
  const file = await import(`$lib/content/${slug}.md`);

  if (file && typeof file === "object" && "metadata" in file) {
    const metadata = file.metadata as Omit<Post, "slug">;
    const post = { ...metadata, slug } satisfies Post;
    if (post.published) {
      return post;
    }
  }

  throw error(404, `Post with slug ${slug} does not exist`);
}
