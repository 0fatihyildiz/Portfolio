<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
</script>

<template>
  <main>
    <OtherColor />
    <OtherNoise />
    <OtherCookie />
    <NuxtLayout>
      <div class="content">
        <ClientOnly>
          <LayoutHeader />
        </ClientOnly>
        <NuxtPage />
        <LayoutFooter />
      </div>
    </NuxtLayout>
  </main>
</template>

<style lang="postcss">
main {
  @apply bg-zinc-50 border border-12 border-[rgba(var(--primary),0.2)] py-6 px-4 ;

  .content {
    @apply max-w-6xl mx-auto;
  }
}
</style>
