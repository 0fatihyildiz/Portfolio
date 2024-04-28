<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: portfolio-module
- Description: My new Nuxt module
-->

# My Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module integrated with the [Nuxt Devtools](https://github.com/nuxt/devtools).

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

1. Add `portfolio-module` dependency to your project

```bash
# Using pnpm
pnpm add -D portfolio-module

# Using yarn
yarn add --dev portfolio-module

# Using npm
npm install --save-dev portfolio-module
```

2. Add `portfolio-module` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'portfolio-module'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with playground, with devtools client ui
npm run dev

# Develop with playground, with bundled client ui
npm run play:prod

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/portfolio-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/portfolio-module

[npm-downloads-src]: https://img.shields.io/npm/dm/portfolio-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/portfolio-module

[license-src]: https://img.shields.io/npm/l/portfolio-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/portfolio-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
