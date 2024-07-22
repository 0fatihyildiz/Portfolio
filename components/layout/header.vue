<script setup lang="ts">
const { y, directions } = useScroll(window)
const direction = ref(false)
const mobileMenuRef = ref<HTMLDivElement>()
const navigation = [
  { name: 'Works', href: '/#works' },
  { name: 'About', href: '/#about' },
  { name: 'Blogs', href: '/blogs' },
]

const social = [
  { icon: 'i-simple-icons-twitter', name: 'Twitter', href: 'https://twitter.com/0fatihyildiz' },
  { icon: 'i-simple-icons-github', name: 'GitHub', href: 'https://github.com/0fatihyildiz' },
]

const mobileMenu = ref(false)

function handleCallMe() {
  if (import.meta.client)
    window.location.href = 'https://cal.com/fatihdev/30min'
}

function getHeight(el: HTMLDivElement) {
  if (el)
    return el.getClientRects()[0].height
}

const mobileMenuHeight = computed(() => mobileMenuRef.value ? getHeight(mobileMenuRef.value) : 0)

onClickOutside(mobileMenuRef, () => mobileMenu.value = false)

watchEffect(() => {
  if (mobileMenu.value)
    return direction.value = true

  if (directions.top)
    direction.value = true
  else if (directions.bottom || y.value <= 100)
    direction.value = false
})
</script>

<template>
  <header class="flex flex-col overflow-hidden" :class="[{ active: direction }]">
    <div class="w-full flex items-center justify-between">
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
              {{ link.name }}
            </FormLink>
          </nav>
        </div>
        <button class="btn" @click="handleCallMe">
          Contact me
        </button>
      </div>
      <button class="h-10 w-10 flex items-center justify-center rounded-full py-1 md:hidden hover:bg-zinc-500/5" @click="mobileMenu = !mobileMenu">
        <i class="inline-block text-2xl" :class="mobileMenu ? 'i-ph-x-bold' : 'i-ph-list-bold'" />
      </button>
    </div>

    <div class="w-full overflow-hidden transition-all md:hidden" :class="mobileMenu ? 'opacity-100 mt-4' : 'opacity-0'" :style="{ height: mobileMenu ? `${mobileMenuHeight}px` : 0 }">
      <div ref="mobileMenuRef" class="w-full divide-y divide-zinc-200">
        <nav class="flex flex-col gap-2 px-2 pb-2">
          <FormLink
            v-for="(link, index) in navigation"
            :key="index"
            class="block rounded-xl px-3 py-2 text-base leading-7 text-gray-900 -mx-3 hover:bg-gray-50"
            :href="link.href"
            @click="mobileMenu = false"
          >
            {{ link.name }}
          </FormLink>
        </nav>

        <nav class="flex flex-col gap-2 px-2 pt-2">
          <FormLink
            v-for="(link, index) in social"
            :key="index"
            class="block rounded-xl px-3 py-2 text-base leading-7 text-gray-900 -mx-3 hover:bg-gray-50"
            :href="link.href"
            target="_blank"
          >
            <i :class="link.icon" class="inline-block text-xl text-zinc-500 transition group-hover:text-primary" />
            {{ link.name }}
          </FormLink>
        </nav>

        <button class="mt-5 w-full btn" @click="handleCallMe">
          Contact me
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  @apply max-w-4xl mx-auto transition-all duration-400 py-2 sticky rounded-2xl -top-20 z-20 shadow-sm bg-white/80 px-4 backdrop-blur-lg;
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
