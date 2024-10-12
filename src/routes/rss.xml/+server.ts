import { getPosts } from "$lib";
import * as config from "$lib/config";
import type { Post } from "$lib/types";

export const prerender = true;

export async function GET() {
  const posts: Post[] = getPosts();

  const headers = { "Content-Type": "application/xml" };
  const xml = `
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>${config.title}</title>
        <description>${config.description}</description>
        <link>${config.url}</link>
        <atom:link href="${config.url}rss.xml" rel="self" type="application/rss+xml" />
        ${posts
          .map((post) =>
            `
              <item>
                <title>${post.title}</title>
                <description>${post.description}</description>
                <link>${config.url}blog${post.slug}</link>
                <guid isPermaLink="true">${config.url}${post.slug}</guid>
                <pubDate>${new Date(post.date).toUTCString()}</pubDate>
              </item>`.trim(),
          )
          .join("")}
      </channel>
    </rss>
  `.trim();

  return new Response(xml, { headers });
}
