<script lang="ts" setup>
const colors: { name: string; value: string }[] = [
    {
        name: "Red",
        value: "239, 68, 68"
    },
    {
        name: "Orange",
        value: "249, 115, 22"
    },
    {
        name: "Amber",
        value: "245, 158, 11"
    },
    {
        name: "Yellow",
        value: "234, 179, 8"
    },
    {
        name: "Lime",
        value: "132, 204, 22"
    },
    {
        name: "Green",
        value: "34, 197, 94"
    },
    {
        name: "Emerald",
        value: "16, 185, 129"
    },
    {
        name: "Teal",
        value: "20, 184, 166"
    },
    {
        name: "Cyan",
        value: "6, 182, 212"
    },
    {
        name: "Sky",
        value: "14, 165, 233"
    },
    {
        name: "Blue",
        value: "59, 130, 246"
    },
    {
        name: "Indigo",
        value: "99, 102, 241"
    },
    {
        name: "Violet",
        value: "139, 92, 246"
    },
    {
        name: "Purple",
        value: "168, 85, 247"
    },
    {
        name: "Fuchsia",
        value: "217, 70, 239"
    },
    {
        name: "Pink",
        value: "236, 72, 153"
    },
    {
        name: "Rose",
        value: "244, 63, 94"
    }
]

const primaryColor = useCssVar('--primary')
</script>

<template>
  <div class="fixed right-5 top-1/2 z-10 flex flex-col overflow-y-auto rounded-lg bg-white px-2 py-4 drop-shadow-lg -translate-y-1/2 space-y-2">
    <button
      v-for="color in colors" :key="color.name" :style="{ background: `rgb(${color.value})` }"
      :class="{ 'ring ring-offset-1': color.value === primaryColor }" class="h-8 w-8 flex-shrink-0 border border-black border-opacity-10 rounded-full" @click="primaryColor = color.value"
    />
  </div>
</template>
