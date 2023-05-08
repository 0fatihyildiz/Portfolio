<script setup lang="ts">
const navigation = [
  { name: 'Works', href: '#works' },
  { name: 'About', href: '#about' },
]

const social = [
  { name: 'Twitter', href: 'https://twitter.com/0fatihyildiz' },
  { name: 'GitHub', href: 'https://github.com/0fatihyildiz' },
]
</script>

<template>
  <header>
    <NuxtLink class="flex-shrink-0" to="/">
      <img
        class="logo"
        src="https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4"
        alt="logo"
      >
    </NuxtLink>

    <div class="flex items-center w-full divide-x divide-zinc-200 space-x-6">
      <nav class="nav">
        <NuxtLink
          v-for="(link, index) in navigation"
          :key="index"
          class="link"
          :to="{ hash: link.href }"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
      <nav class="nav">
        <a
          v-for="(link, index) in social"
          :key="index"
          class="link"
          :href="link.href"
          target="_blank"
        >
          {{ link.name }}</a>
      </nav>
    </div>
    <button class="btn">
      Contact Me
    </button>
  </header>
</template>

<style lang="postcss" scoped>
header {
  @apply bg-white/80 backdrop-filter backdrop-blur-lg px-4 py-2 rounded-full shadow-sm flex space-x-4 items-center sticky top-0 z-20;

  .logo {
    @apply w-12 h-12 bg-yellow-500 rounded-full border-2 border-zinc-300;
  }

  .nav {
    @apply flex gap-6 pl-6;

    .link {
      @apply inline-flex font-medium text-zinc-800 hover:text-zinc-950 text-shadow-sm text-sm;
    }
  }
}
</style>
