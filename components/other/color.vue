<script lang="ts" setup>
import { useGeneralStore } from '~/store'

const colors: { name: string; value: string }[] = [
  {
    name: 'Red',
    value: '239, 68, 68',
  },
  {
    name: 'Orange',
    value: '249, 115, 22',
  },
  {
    name: 'Amber',
    value: '245, 158, 11',
  },
  {
    name: 'Yellow',
    value: '234, 179, 8',
  },
  {
    name: 'Lime',
    value: '132, 204, 22',
  },
  {
    name: 'Green',
    value: '34, 197, 94',
  },
  {
    name: 'Emerald',
    value: '16, 185, 129',
  },
  {
    name: 'Teal',
    value: '20, 184, 166',
  },
  {
    name: 'Cyan',
    value: '6, 182, 212',
  },
  {
    name: 'Sky',
    value: '14, 165, 233',
  },
  {
    name: 'Blue',
    value: '59, 130, 246',
  },
  {
    name: 'Indigo',
    value: '99, 102, 241',
  },
  {
    name: 'Violet',
    value: '139, 92, 246',
  },
  {
    name: 'Purple',
    value: '168, 85, 247',
  },
  {
    name: 'Fuchsia',
    value: '217, 70, 239',
  },
  {
    name: 'Pink',
    value: '236, 72, 153',
  },
  {
    name: 'Rose',
    value: '244, 63, 94',
  },
]

const colorMenuState = ref(false)

const store = useGeneralStore()

const colorMenu = ref<HTMLElement | undefined>()

const primaryColor = useCssVar('--primary')
const gradientColor = useCssVar('--gradient-color-4')

function meshColor(color: string) {
  initMesh()

  const [r, g, b] = color.split(',').map(item => Number(item))
  gradientColor.value = rgbToHex(r, g, b)
}

function handleSetColor(color: string) {
  meshColor(color)
  primaryColor.value = color
  store.color = color
  colorMenuState.value = false
}

onMounted(() => {
  primaryColor.value = store.color
  
  nextTick(() => meshColor(store.color))
})

onClickOutside(colorMenu, () => colorMenuState.value = false)
</script>

<template>
  <div class="inset-0 fixed flex items-center pl-5">
    <div ref="colorMenu"
      class="group z-2 w-10 flex flex-col overflow-hidden rounded-full bg-white p-1 drop-shadow-lg transition-all duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] space-y-2"
      :class="{ 'h-170': colorMenuState, 'h-10': !colorMenuState }">
      <template v-if="colorMenuState">
        <button v-for="color in colors" :key="color.name" :style="{ background: `rgb(${color.value})` }"
          :class="{ 'ring ring-offset-1': color.value === primaryColor }"
          class="h-8 w-8 flex-shrink-0 border border-black border-opacity-10 rounded-full"
          @click="() => handleSetColor(color.value)" />
      </template>
      <button v-else
        class="h-8 w-8 flex-shrink-0 border border-black border-opacity-10 rounded-full bg-[rgba(var(--primary),1)]"
        @click="colorMenuState = !colorMenuState" />
    </div>
  </div>
</template>
