<script setup lang="ts">
const route = useRoute<'blogs-id'>()
</script>

<template>
  <div>
    {{ route.params.id }}
  </div>
</template>

<style scoped></style>
