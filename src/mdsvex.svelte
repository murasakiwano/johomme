<script lang="ts" module>
  import img from "$lib/components/img.svelte";
  export { img };
</script>

<script>
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

{@render children?.()}
