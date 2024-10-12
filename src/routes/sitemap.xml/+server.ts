import { getPosts } from "$lib";
import * as config from "$lib/config";
import type { Post } from "$lib/types";

export async function GET() {
  const posts: Post[] = getPosts();

  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${posts
        .map((post) =>
          `
      <url>
        <loc>${config.url}blog${post.slug}</loc>
        <lastmod>${new Date(post.date).toUTCString()}</lastmod>
      </url>`.trim(),
        )
        .join("")}
    </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    },
  );
}
