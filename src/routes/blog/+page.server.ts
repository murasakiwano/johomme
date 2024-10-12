import { getPosts } from "$lib";

export async function load() {
  return { posts: getPosts() };
}
