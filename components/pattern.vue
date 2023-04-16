<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  name?: string
  height?: number
  width?: number
}>()

const random = Math.floor(Math.random() * 60) + 1

const icon = defineAsyncComponent(() =>
  import(`../assets/patterns/${props.name ? props.name : random}.svg`),
)
</script>

<template>
  <component :is="icon" viewBox="0 0 32 32" :heigh="height" :width="width" />
</template>
