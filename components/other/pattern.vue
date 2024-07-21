<script lang="ts" setup>
// import { Avvvatars } from 'avvvatars-vue'

const random = (Math.floor(Math.random() * 60) + 1)
</script>

<template>
  <ClientOnly>
    <!-- <Avvvatars
      :value="String(random)"
      :size="100"
    /> -->
    <div class="i-svg-spinners:wind-toy h-12 w-12" />
  </ClientOnly>
</template>
