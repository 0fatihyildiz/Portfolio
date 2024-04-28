import { defineNuxtModule } from "@nuxt/kit";
import { startSubprocess } from "@nuxt/devtools-kit";
import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Fatih",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
  routeRules: {
    "/": {
      prerender: true,
    },
    "/api/[username]": {
      cache: {
        maxAge: 60 * 60 * 24 * 365, // 1 year
      },
    },
    "/api/**": { cors: true },
  },
  nitro: {
    imports: {
      dirs: ["./src/db/**"],
      imports: [
        { from: "zod", name: "z" },
      ],
    },
  },
  css: ["~/assets/main.postcss"],
  postcss: {
    plugins: {
      "postcss-nested": {},
      "postcss-import": true,
      cssnano: true,
    },
  },
  modules: [
    "@unocss/nuxt",
    "@productdevbook/motion/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vue-macros/nuxt",
    "@vee-validate/nuxt",
    "@nuxt/image",
    "./portfolio-editor/src/module",

    defineNuxtModule({
      setup(_, nuxt) {
        if (!nuxt.options.dev) {
          return;
        }

        startSubprocess(
          {
            command: "npx",
            args: ["nuxi", "dev", "--port", "3300"],
            cwd: resolve(__dirname, "./portfolio-editor/client"),
          },
          {
            id: "portfolio-module:client",
            name: "Portfolio Module Client Dev",
          },
        );
      },
    }),
  ],
  macros: {
    exportExpose: true,
  },
});
