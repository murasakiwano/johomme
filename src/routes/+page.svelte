<script lang="ts">
  import PostList from "$lib/components/PostList.svelte";
  import HomeIntro from "$lib/content/home-introduction.md";

  import "@fontsource-variable/raleway";
  import "@fontsource-variable/raleway/wght-italic.css";

  export let data;
</script>

<div class="prose prose-green mx-auto divide-y dark:prose-invert lg:prose-lg">
  <section class="mb-5">
    <h1>Hi! Welcome to my personal website</h1>
    <HomeIntro />
  </section>

  <section>
    <h2>Posts</h2>
    <PostList posts={data.posts} />
  </section>
</div>
