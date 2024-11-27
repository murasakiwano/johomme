<script lang="ts">
  let { children } = $props();
</script>

<div class="prose-primary prose me-auto ms-auto max-w-[80ch] dark:prose-invert">
  {@render children()}
</div>
