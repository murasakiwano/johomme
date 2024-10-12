import { getPosts } from "$lib";
import { json } from "@sveltejs/kit";

export async function GET() {
  const posts = getPosts();
  return json(posts);
}
