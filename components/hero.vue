<template>
  <section class="relative">
    <div class="flex flex-col px-4 py-24 space-y-4">
      <PresenceGroup>
        <Motion :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.3)">
          <h1 class="title">
            Hi, I'm <span class="text-[rgba(var(--primary),1)]">{{ config?.name }}</span>
          </h1>
        </Motion>
        <Motion :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.4)">
          <h1 class="title !text-2xl md:!text-4xl">
            I'm a <span class="text-[rgba(var(--primary),1)]">{{ config?.job_title }}</span> from
            <span class="text-black">{{ config.from }}</span>
          </h1>
        </Motion>
        <Motion :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.5)">
          <p class="subtitle">
            {{ config?.description }}
          </p>
        </Motion>
      </PresenceGroup>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
    .title{
        @apply text-left inline-block relative text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-600 tracking-tight;

        &.highlight{
            @apply p-4 border border-zinc-900/70 rounded-lg before:(top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-[''] absolute w-full h-full rotate-2 rounded-lg bg-[rgba(var(--primary),0.5)] -z-10 pointer-events-none);
        }
    }

    .subtitle{
        @apply text-xl text-zinc-500;
    }
</style>
