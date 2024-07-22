<template>
  <footer>
    <a href="mailto:0fatihdev@gmail.com" class="mx-auto max-w-4xl flex items-center justify-between py-10">
      <div
        class="grid grid-cols-1 items-center gap-5 text-center md:grid-cols-3"
      >
        <img
          class="logo"
          src="https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4"
          alt="logo"
        >
      </div>

      <div class="flex items-center gap-2">
        <i class="i-ph:envelope-simple-bold h-5 w-5" />
        <span class="text-lg font-medium underline decoration-[rgba(var(--primary),1)] decoration-wavy">
          0fatihdev@gmail.com
        </span>
      </div>
    </a>
  </footer>
</template>

<style lang="postcss" scoped>
.logo {
  @apply w-12 h-12 bg-primary rounded-full border-2 border-zinc-300;
}
</style>
