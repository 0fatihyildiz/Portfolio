import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";
import { setupDevToolsUI } from "./devtools";

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Enable Nuxt Devtools integration
   *
   * @default true
   */
  devtools: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "portfolio-module",
    configKey: "portfolioModule",
  },
  defaults: {
    devtools: true,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    addPlugin(resolver.resolve("./runtime/plugin"));

    if (options.devtools) {
      setupDevToolsUI(nuxt, resolver);
    }
  },
});
