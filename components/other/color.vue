<script lang="ts" setup>
const colors: { name: string; value: string }[] = [
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Lime', value: '#84cc16' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Sky', value: '#0ea5e9' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Violet', value: '#8b5cf6' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Fuchsia', value: '#d946ef' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Rose', value: '#f43f5e' },
]

const primaryColor = useCssVar('--color-primary')
</script>

<template>
  <div class="fixed right-5 top-1/2 z-10 flex flex-col overflow-y-auto rounded-lg bg-white px-2 py-4 drop-shadow-lg -translate-y-1/2 space-y-2">
    <button
      v-for="color in colors" :key="color.name" :style="{ background: color.value }"
      :class="{ 'ring ring-offset-1': color.value === primaryColor }" class="h-8 w-8 flex-shrink-0 border border-black border-opacity-10 rounded-full" @click="primaryColor = color.value"
    />
  </div>
</template>
