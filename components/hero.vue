<script setup lang="ts">
import { animateKeyframes, initialKeyframes, transition } from '@/composables/animation'
</script>

<template>
  <section class="relative">
    <div class="flex flex-col py-24 space-y-4">
      <PresenceGroup>
        <Motion :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.3)">
          <h1 class="title">
            Hi, I'm <span class="text-[rgba(var(--primary),1)]">Fatih Yıldız</span>
          </h1>
        </Motion>
        <Motion :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.4)">
          <h1 class="title !text-2xl sm:!text-5xl">
            I'm a <span class="text-[rgba(var(--primary),1)]">Frontend Developer</span> from
            <span class="text-black">Turkey</span>
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
        @apply text-left inline-block relative text-6xl sm:text-8xl font-bold text-zinc-600 tracking-tighter;

        &.highlight{
            @apply p-4 border border-zinc-900/70 rounded-lg before:(top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-[''] absolute w-full h-full rotate-2 rounded-lg bg-[rgba(var(--primary),0.5)] -z-10 pointer-events-none);
        }
    }

    .subtitle{
        @apply text-xl text-zinc-500;
    }
</style>
