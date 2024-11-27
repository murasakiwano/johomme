<script lang="ts">
  import PostList from "$lib/components/PostList.svelte";

  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<section>
  <h1 class="mb-10 scroll-m-20 text-center text-4xl font-extrabold text-primary lg:text-5xl">
    {data.category}
  </h1>

  <PostList posts={data.posts} />
</section>
