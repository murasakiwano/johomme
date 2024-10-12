// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Platform {
      env: Env;
      cf: CfProperties;
      ctx: ExecutionContext;
    }
  }

  declare module "*.md" {
    import type { SvelteComponent } from "svelte";

    export default class Comp extends SvelteComponent {}

    export const metadata: Record<string, unknown>;
  }
}

export {};
