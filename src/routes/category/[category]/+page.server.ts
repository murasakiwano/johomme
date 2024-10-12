import { getPosts } from "$lib";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const posts = getPosts().filter((post) => post.tags?.includes(params.category));

  if (posts.length === 0) {
    error(404, `Could not find category ${params.category}`);
  }

  return { category: params.category, posts };
}
