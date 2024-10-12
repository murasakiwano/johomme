<script>
  import BaseHead from "$lib/components/BaseHead.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import PageTransition from "$lib/components/transition.svelte";
  import { ModeWatcher } from "mode-watcher";

  import "../app.css";

  let { children, data } = $props();
</script>

<ModeWatcher />

<BaseHead />

<div class="grid-rows-[auto 1fr auto] mx-auto grid h-[100%] max-w-screen-xl">
  <header>
    <Header />
  </header>

  <main class="p-16">
    <PageTransition url={data.url}>
      {@render children()}
    </PageTransition>
  </main>

  <Footer></Footer>
</div>

<style>
</style>
