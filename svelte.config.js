import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { mdsvex, escapeSvelte } from "mdsvex";
import { nameToEmoji } from "gemoji";
import { findAndReplace } from "mdast-util-find-and-replace";
import { createHighlighter } from "shiki";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

function remarkEmoji() {
  /** @param tree {import("mdast").Root} */
  return function (tree) {
    findAndReplace(tree, [
      /:(\+1|[-\w]+):/g,
      /**
       * @param {string} _
       * @param {string} $1
       * @return {string | false}
       */
      function (_, $1) {
        return Object.hasOwn(nameToEmoji, $1) ? nameToEmoji[$1] : false;
      },
    ]);
  };
}

const theme = "github-dark";
const highlighter = await createHighlighter({
  themes: [theme],
  langs: ["javascript", "typescript", "rust", "ruby", "svelte"],
});

/** @type {import("mdsvex").MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md", ".svx"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
      return `{@html \`${html}\` }`;
    },
  },
  layout: {
    _: "./src/mdsvex.svelte",
  },
  remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }], remarkEmoji],
  rehypePlugins: [rehypeSlug],
};

/** @type {import("@sveltejs/kit").Config} */
const config = {
  extensions: [".svelte", ".md", ".svx"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter(),
  },
};

export default config;
