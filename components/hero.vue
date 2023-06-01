<script setup lang="ts">
import { animateKeyframes, initialKeyframes, transition } from '@/composables/animation'
</script>

<template>
  <section class="relative">
    <div class="rgba-bg-[#000000] flex flex-col items-center py-24 space-y-4">
      test
      <PresenceGroup>
        <Motion :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.3)">
          <h1 class="title highlight">
            Hi, I'm <span class="text-zinc-900">Fatih Yildiz</span>
          </h1>
        </Motion>
        <Motion :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.4)">
          <h1 class="title !text-5xl">
            I'm a <span class="text-zinc-900">Frontend Developer</span> from
            <span class="text-zinc-900">Turkey</span>
          </h1>
        </Motion>
        <Motion :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.5)">
          <p class="subtitle">
            I'm passionate about frontend development and design, always seeking new challenges and opportunities to learn.
          </p>
        </Motion>
      </PresenceGroup>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
    .title{
        @apply text-center inline-block relative text-6xl py-2 font-bold text-zinc-800;

        &.highlight{
            @apply p-4 border border-zinc-900/70 rounded-lg before:(top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-[''] absolute w-full h-full rotate-2 rounded-lg bg-primary -z-10 pointer-events-none);
        }
    }

    .subtitle{
        @apply text-xl text-center text-zinc-500;
    }
</style>
