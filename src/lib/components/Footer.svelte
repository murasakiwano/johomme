<script lang="ts">
  import { title } from "$lib/config";
</script>

<!-- Footer -->
<footer class="border-t-[1px] border-t-border text-center">
  <p class="text-muted-foreground">{title} &copy; {new Date().getFullYear()}</p>
</footer>

<style>
  footer {
    padding-block: theme("size.8");
  }
</style>
