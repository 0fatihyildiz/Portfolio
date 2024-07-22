<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
import { useGeneralStore } from './store'

onMounted(initMesh)
const store = useGeneralStore()
</script>

<template>
  <main clasa="transition-all duration-500" :class="store.isLoading ? 'opacity-0' : 'opacity-100 bg-zinc-50'">
    <OtherColor />
    <OtherNoise />
    <OtherCookie />
    <ClientOnly>
      <NuxtLayout>
        <div class="content">
          <ClientOnly>
            <LayoutHeader />
          </ClientOnly>
          <NuxtPage />
          <LayoutFooter />
        </div>
      </NuxtLayout>
    </ClientOnly>
  </main>
</template>

<style lang="postcss">
main {
  @apply border border-12 border-transparent md:border-[rgba(var(--primary), 0.2)] py-6 md:px-4;

  .content {
    @apply max-w-5xl mx-auto z-10 relative;
  }
}
</style>
