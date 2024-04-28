<script setup lang="ts">
import config from "../../../composables/config";
import { useDevtoolsClient } from '@nuxt/devtools-kit/iframe-client'

const client = useDevtoolsClient()
const configFreezed = JSON.parse(JSON.stringify(config))

const reactiveConfig = ref(config)
</script>

<template>
  <div class="relative p-10 n-bg-base max-w-xl w-full mx-auto flex flex-col h-screen">
    <h1 class="text-3xl font-bold">
      Portfolio Module
    </h1>
    <div class="opacity-50 mb-4">
      This is a module for the portfolio editor
    </div>
    <div
      v-if="client"
      class="flex flex-col gap-2"
    >
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 w-full">
          <NTextInput
            v-model="reactiveConfig.name"
            placeholder="Name and Surname"
            class="w-full border border-black/10 dark:border-white/10 rounded-lg"
          />
          <NTextInput
            v-model="reactiveConfig.email"
            placeholder="Email"
            class="w-full border border-black/10 dark:border-white/10 rounded-lg"
          />
        </div>
        <NTextInput
          v-model="reactiveConfig.job_title"
          placeholder="Job Title"
          class="w-full border border-black/10 dark:border-white/10 rounded-lg"
        />
        <NTextInput
          v-model="reactiveConfig.from"
          placeholder="From"
          class="w-full border border-black/10 dark:border-white/10 rounded-lg"
        />
        <NButton
          :disabled="deepComprassion(reactiveConfig, configFreezed)"
          class="bg-green/20 text-green hover:bg-green/30 rounded-md py-1 px-4 disabled:(opacity-50 hover:bg-green/20)"
        >
          Save
        </NButton>
      </div>
    </div>
  </div>
</template>
