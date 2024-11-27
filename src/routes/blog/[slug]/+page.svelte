<script lang="ts">
  import { formatDate } from "$lib/format-date";

  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<article class="prose-primary prose prose-lg me-auto ms-auto max-w-prose dark:prose-invert">
  <!-- Title -->
  <hgroup>
    <h1>{data.meta.title}</h1>

    <div class="not-prose font-mono text-sm text-muted-foreground">
      <p>Published at {formatDate(data.meta.date)}</p>

      <!-- Tags -->
      {#if data.meta.tags}
        <div class="flex items-baseline gap-2">
          <span>Tags:</span>
          {#each data.meta.tags as category}
            <a
              href="/category/{category}"
              class="rounded p-1 text-primary transition-all ease-in-out hover:bg-primary hover:italic hover:text-primary-foreground motion-reduce:transition-none"
              >&num;{category}</a
            >
          {/each}
        </div>
      {/if}
    </div>
  </hgroup>

  <!-- Post -->
  <data.content />
</article>
