<script lang="ts" setup>
const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
  { id: 4, name: 'New users annually', value: '46,000' },
]
</script>

<template>
  <div class="stats">
    <dl class="statsWrap">
      <div v-for="stat in stats" :key="stat.id" class="stat">
        <dt class="name">
          {{ stat.name }}
        </dt>
        <dd class="value">
          {{ stat.value }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<style lang="postcss" scoped>
.stats {
  @apply bg-white shadow-sm py-12 rounded-lg mt-12 px-6;

  .statsWrap {
    @apply grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4;

    .stat {
      @apply mx-auto flex max-w-xs flex-col gap-y-1;

      .name {
        @apply text-sm leading-7 text-zinc-600;
      }

      .value {
        @apply order-first text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl;
      }
    }
  }
}
</style>
