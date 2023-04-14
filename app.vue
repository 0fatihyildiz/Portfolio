<script lang="ts" setup>
import '@unocss/reset/tailwind.css'
</script>

<template>
  <main>
    <div class="content">
      <Header />
      <Hero />
    </div>
  </main>
</template>

<style lang="postcss" scoped>
main {
  @apply bg-gray-50 rounded-2xl h-full w-full py-6 px-4;

  .content {
    @apply max-w-4xl mx-auto;
  }
}
</style>
