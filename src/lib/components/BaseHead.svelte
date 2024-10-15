<script lang="ts">
  import { page } from "$app/stores";
  import { description as configDescription, title as configTitle } from "$lib/config";

  const ogType: string = $page.data.ogType ?? "website";
  const url: string = $page.url.toString();
  const title: string = $page.data.title ?? configTitle;
  const description: string = $page.data.description ?? configDescription;
  const imageURL: string = "https://r2.johom.me/blog-card.png";
</script>

<svelte:head>
  <!-- Fonts and Icons -->
  <link rel="stylesheet" href="/fonts/inter.css" />
  <link rel="stylesheet" href="/fonts/monolisa-webfont.css" />
  <link rel="icon" href="/favicon.png" />
  <link rel="icon" href="/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <!-- OpenGraph/LinkedIn Meta Tags -->
  <meta property="og:type" content={ogType} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageURL} />

  <!-- Twitter Meta Tags -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={imageURL} />
</svelte:head>
