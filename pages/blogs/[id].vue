<script setup lang="ts">
import type { DetailContent } from '@postiva/client'

const route = useRoute<'blogs-id'>()

const { $postiva } = useNuxtApp()

const blog = ref<DetailContent>()

async function getContentBySlug() {
  try {
    blog.value = await $postiva.contents.getContentBySlug(route.params.id)
  }
  catch (error) {
    console.error('Error fetching content:', error)
  }
}

await getContentBySlug()
</script>

<template>
  <div class="mx-auto mt-12 max-w-4xl min-h-[calc(100vh-250px)] rounded-2xl bg-white/50 px-6 py-12 backdrop-blur-sm space-y-4">
    <div class="w-full px-5">
      <span v-if="blog?.updatedAt" class="border-l-2 border-[rgba(var(--primary),0.4)] px-3 text-xl font-medium text-zinc-700">
        {{ useTimeAgo(blog.updatedAt) }}
      </span>
      <h1 class="mt-4 text-5xl font-medium">
        {{ blog?.title }}
      </h1>
      <p class="mt-2 text-xl text-zinc-700">
        {{ blog?.description }}
      </p>
    </div>
    <NuxtImg v-if="blog?.thumbnail" :src="blog.thumbnail" class="h-96 w-full rounded-2xl bg-zinc-400 object-cover" />
    <div v-else class="mb-2 h-0.3 w-full bg-black/10" />
    <div class="blog-content" v-html="blog?.html" />
  </div>
</template>

<style lang="postcss">
.blog-content {
  @apply p-5 rounded-lg text-base leading-relaxed text-gray-600;

  h1 {
    @apply text-2xl font-semibold;
  }

  h2 {
    @apply text-xl font-semibold;
  }

  h3 {
    @apply text-lg font-semibold;
  }

  h4 {
    @apply text-base font-semibold;
  }

  h5 {
    @apply text-sm font-semibold;
  }

  pre {
    @apply my-2 bg-zinc-900 font-mono text-xs whitespace-pre-line text-white rounded-xl p-4;
  }

  ul {
    @apply list-disc my-2;
  }

  ol {
    @apply list-decimal my-2;
  }

  blockquote {
    @apply my-6 px-4 py-2 border-l-2 border-zinc-200;
  }

}
</style>
