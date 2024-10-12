import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);

    return {
      content: post.default,
      meta: post.metadata,
      ogType: "article",
      title: post.metadata.title,
      description: post.metadata.description,
    };
  } catch (e) {
    console.error(e);
    error(404, `Could not find post "${params.slug}"`);
  }
}
