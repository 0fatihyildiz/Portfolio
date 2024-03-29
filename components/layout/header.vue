<script setup lang="ts">
import { useModalStore } from '~/store';

const { y, directions } = useScroll(window)
const direction = ref(false)
const modals = useModalStore()

const navigation = [
  { name: 'Works', href: '#works' },
  { name: 'About', href: '#about' },
]

const social = [
  { icon: 'i-simple-icons-twitter', name: 'Twitter', href: 'https://twitter.com/0fatihyildiz' },
  { icon: 'i-simple-icons-github', name: 'GitHub', href: 'https://github.com/0fatihyildiz' },
]

watchEffect(() => {
  if (directions.top)
    direction.value = true
  else if (directions.bottom || y.value <= 100)
    direction.value = false
})
</script>

<template>
  <header :class="{ active: direction }">
    <NuxtLink class="flex-shrink-0" to="/">
      <img
        class="logo"
        src="https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4"
        alt="logo"
      >
    </NuxtLink>
    <div class="hidden w-full items-center justify-between md:flex">
      <div class="rgba-[#fff] flex items-center space-x-6 divide-x divide-zinc-200">
        <nav class="nav">
          <FormLink
            v-for="(link, index) in navigation"
            :key="index"
            class="link"
            :href="link.href"
          >
            {{ link.name }}
          </FormLink>
        </nav>
        <nav class="nav">
          <FormLink
            v-for="(link, index) in social"
            :key="index"
            class="link"
            :href="link.href"
            target="_blank"
          >
            <i :class="link.icon" class="inline-block text-sm text-zinc-500 transition group-hover:text-primary" />
            {{  link.name }}
          </FormLink>
        </nav>
      </div>
      <button class="btn" @click="() => modals.contact = true">
        Contact Me
      </button>
    </div>
    <button class="flex items-center rounded-full px-4 py-1 md:hidden hover:bg-zinc-500/5">
      <i class="i-ph-list-bold inline-block text-2xl" />
    </button>
  </header>
</template>

<style lang="postcss" scoped>
header {
  @apply max-w-4xl mx-auto transition-all duration-400 py-2 rounded-full flex space-x-4 items-center justify-between sticky -top-20 z-20 shadow-sm bg-white/80 px-4 backdrop-blur-lg;
  animation: initialAnimation 1s ease-in-out;

  &.active {
    @apply top-5;
  }

  .logo {
    @apply w-12 h-12 bg-primary rounded-full border-2 border-zinc-300;
  }

  .nav {
    @apply flex gap-6 pl-6;

    .link {
      @apply inline-flex font-medium text-zinc-800 hover:text-zinc-950 text-shadow-sm text-sm;
    }
  }

  @keyframes initialAnimation {
    0% {
      transform: translateY(-100px);
      filter: drop-shadow(0, 20, 13px, rgba(0, 0, 0, 0.05));
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
      filter: drop-shadow(0, 0, 1px, rgba(0, 0, 0, 0.05));
    }
  }
}
</style>
