import { defineNuxtModule } from "@nuxt/kit";
import { startSubprocess } from "@nuxt/devtools-kit";
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    /**
     * My module
     */
    "../src/module",
    /**
     * Start a sub Nuxt Server for developing the client
     *
     * The terminal output can be found in the Terminals tab of the devtools.
     */
    defineNuxtModule({
      setup(_, nuxt) {
        if (!nuxt.options.dev) {
          return;
        }

        const process = startSubprocess(
          {
            command: "npx",
            args: ["nuxi", "dev", "--port", "3300"],
            cwd: resolve(__dirname, "../client"),
          },
          {
            id: "portfolio-module:client",
            name: "My Module Client Dev",
          },
        );
      },
    }),
  ],
  myModule: {},
});
