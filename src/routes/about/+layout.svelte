<script lang="ts">
  let { children } = $props();
</script>

<div class="prose prose-primary me-auto ms-auto max-w-[80ch] dark:prose-invert">
  {@render children()}
</div>
