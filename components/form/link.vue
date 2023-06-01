<script lang="ts" setup>
interface Props {
  href: string
}
defineProps<Props>()
</script>

<template>
  <NuxtLink :to="href" class="group relative isolate flex flex-none items-center gap-x-3 rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300">
    <span class="absolute inset-0 scale-75 rounded-lg bg-black/5 opacity-0 transition -z-10 group-hover:scale-100 group-hover:opacity-100" />
    <span class="flex items-center self-baseline gap-1 text-black">
      <slot />
    </span>
  </NuxtLink>
</template>
