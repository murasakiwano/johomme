<script lang="ts">
  import { title } from "$lib/config";
  import ModeToggle from "./ModeToggle.svelte";
  import { Button } from "./ui/button";
</script>

<nav class="mt-5 hidden gap-6 font-medium md:grid md:grid-cols-3 md:place-items-center">
  <!-- Title -->
  <Button
    href="/"
    class="text-primary hover:bg-primary hover:text-primary-foreground md:justify-self-start md:text-lg"
    variant="ghost"
  >
    <b class="font-mono text-xl">{title}</b>
  </Button>

  <!-- Navigation -->
  <ul class="m-8 md:m-0 md:flex md:gap-8 md:justify-self-center">
    <li>
      <Button
        href="/about"
        variant="ghost"
        class="font-mono font-light text-muted-foreground transition-colors">About</Button
      >
    </li>
    <li>
      <Button
        href="/blog"
        variant="ghost"
        class="font-mono font-light text-muted-foreground transition-colors hover:text-foreground"
        >Blog</Button
      >
    </li>
    <li>
      <Button
        href="/rss.xml"
        variant="ghost"
        class="font-mono font-light text-muted-foreground transition-colors hover:text-foreground"
        >RSS</Button
      >
    </li>
    <li>
      <Button
        href="https://github.com/murasakiwano"
        variant="ghost"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          /><path d="M9 18c-4.51 2-5-2-7-2" />GitHub</svg
        >
      </Button>
    </li>
  </ul>

  <!-- Theme -->
  <ModeToggle class="md:justify-self-end" />
</nav>
