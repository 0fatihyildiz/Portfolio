<script lang="ts" setup>
const stats = [
  { id: 1, icon: 'i-logos-typescript-icon', href: 'https://www.typescriptlang.org/' },
  { id: 2, icon: 'i-logos-vue', href: 'https://vuejs.org/' },
  { id: 3, icon: 'i-logos-nuxt-icon', href: 'https://nuxt.com/' },
  { id: 4, icon: 'i-logos-supabase-icon', href: 'https://supabase.com/' },
  { id: 5, icon: 'i-logos-firebase', href: 'https://firebase.google.com/' },
  { id: 6, icon: 'i-logos-postcss', href: 'https://postcss.org/' },
]
</script>

<template>
  <div class="stats">
    <dl class="statsWrap">
      <a v-for="stat in stats" :key="stat.id" class="flex justify-around">
        <div class="w-8 h-8 grayscale" :class="stat.icon" />
      </a>
    </dl>
    <span class="sr-only i-logos-typescript-icon i-logos-vue i-logos-nuxt-icon i-logos-postcss i-logos-supabase-icon i-logos-firebase" />
  </div>
</template>

<style lang="postcss" scoped>
.stats {
  @apply bg-white max-w-3xl mx-auto shadow-sm py-8 flex flex-col justify-center rounded-full mt-12 px-6 mb-36;

  .statsWrap {
    @apply flex justify-around px-12 w-full;

    .stat {
      @apply mx-auto flex max-w-xs flex-col gap-y-1;

      .name {
        @apply text-sm leading-7 text-zinc-600;
      }

      .value {
        @apply order-first text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl;
      }
    }
  }
}
</style>
