<script lang="ts" setup>
const stats = [
  { id: 1, icon: 'i-logos-typescript-icon', href: 'https://www.typescriptlang.org/' },
  { id: 2, icon: 'i-logos-vue', href: 'https://vuejs.org/' },
  { id: 3, icon: 'i-logos-nuxt-icon', href: 'https://nuxt.com/' },
  { id: 4, icon: 'i-logos-supabase-icon', href: 'https://supabase.com/' },
  { id: 5, icon: 'i-logos-react', href: 'https://reactjs.org/' },
  { id: 6, icon: 'i-logos-nextjs-icon', href: 'https://nextjs.org/' },
  { id: 6, icon: 'i-logos-firebase', href: 'https://firebase.google.com/' },
  { id: 7, icon: 'i-logos-postcss', href: 'https://postcss.org/' },
  { id: 8, icon: 'i-logos-tailwindcss-icon', href: 'https://tailwindcss.com/' },
]
</script>

<template>
  <PresenceGroup>
    <Motion :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.6)">
      <div class="stats">
        <dl class="statsWrap">
          <FormLink v-for="stat in stats" :key="stat.id" :href="stat.href" target="_blank" class="rgba- flex justify-around py-2 grayscale transition-filter hover:grayscale-0">
            <div class="h-10 w-10" :class="stat.icon" />
          </FormLink>
        </dl>
      </div>
    </Motion>
  </PresenceGroup>
</template>

<style lang="postcss" scoped>
.stats {
  @apply bg-white/50 hidden md:flex backdrop-blur-lg max-w-4xl mx-auto shadow-sm py-8 flex-col justify-center rounded-full mt-12 px-6 mb-36 overflow-hidden;

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
