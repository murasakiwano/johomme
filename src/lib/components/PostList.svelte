<script lang="ts">
  import type { Post } from "$lib/types";
  import { formatDate } from "$lib/format-date";

  type Props = { posts: Post[] };
  let { posts }: Props = $props();
</script>

<ul class="grid list-none gap-8">
  {#each posts as post}
    <li class="flex max-w-prose items-baseline gap-5">
      <p class="font-mono text-sm text-muted-foreground dark:font-light">{formatDate(post.date)}</p>
      <div>
        <a
          href="/blog/{post.slug}"
          class="scroll-m-20 text-lg font-semibold capitalize text-foreground hover:text-primary"
        >
          {post.title}
        </a>
        <p class="text-sm text-muted-foreground">{post.description}</p>
      </div>
    </li>
  {/each}
</ul>
