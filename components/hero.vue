<template>
  <section>
    <div class="flex flex-col items-center space-y-4 py-24">
      <h1 class="title highlight">
        Hi, I'm <span class="text-zinc-900">Fatih Yildiz</span>
      </h1>
      <h1 class="title !text-5xl">
        I'm a <span class="text-zinc-900">Frontend Developer</span> from
        <span class="text-zinc-900">Earth</span>
      </h1>
      <p class="subtitle">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, et delectus. Maiores dicta, deleniti eos et iusto alias mollitia officiis praesentium rerum explicabo autem ratione optio, dolorem, saepe repudiandae voluptas!
      </p>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
    .title{
        @apply inline-block relative text-6xl py-2 font-bold text-zinc-800;

        &.highlight{
            @apply p-4 rounded-lg bg-yellow-400 before:(top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-[''] absolute w-full h-full rotate-2 rounded-lg border border-white);
        }
    }

    .subtitle{
        @apply text-xl text-center text-zinc-500;
    }
</style>
