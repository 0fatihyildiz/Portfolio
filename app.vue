<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
import { Gradient } from '@/utils/Gradient'


onMounted(() => {
  const gradient = new Gradient()
  gradient.initGradient('#gradient-canvas')
})

const isMounted = useMounted()
</script>

<template>
  <main>
    <OtherColor />
    <OtherNoise />
    <OtherCookie />
    <NuxtLayout v-if="isMounted">
      <div class="content">
        <ClientOnly>
          <LayoutHeader />
        </ClientOnly>
        <NuxtPage />
        <LayoutFooter />
      </div>
    </NuxtLayout>
    <div class="inset-0 absolute bg-white" v-else>

    </div>
  </main>
</template>

<style lang="postcss">
main {
  @apply bg-zinc-50 border border-12 border-[rgba(var(--primary), 0.2)] py-6 px-4;

  .content {
    @apply max-w-5xl mx-auto z-10 relative;
  }
}
</style>
