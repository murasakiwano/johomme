<script lang="ts">
  import PostList from "$lib/components/PostList.svelte";

  export let data;
</script>

<section>
  <h1 class="mb-10 scroll-m-20 text-4xl font-extrabold text-primary lg:text-5xl">Posts</h1>

  <PostList posts={data.posts} />
</section>
