<script setup lang="ts">
import type { Content, PaginationResponse } from '@postiva/client'
import thumbnail from '@/assets/thumbnail.png'

const { $postiva } = useNuxtApp()
const blogs = ref<PaginationResponse<Content[]>>()

async function getContents() {
  try {
    blogs.value = await $postiva.contents.getContents()
  }
  catch (error) {
    console.error('Error fetching contents:', error)
  }
}

await getContents()
</script>

<template>
  <div class="h-[calc(100vh-250px)] py-10">
    <template v-if="blogs?.data.length">
      <div class="mx-auto max-w-4xl flex flex-col gap-2 px-5 pb-12">
        <h1 class="text-4xl font-medium underline decoration-[rgba(var(--primary),0.5)] decoration-wavy">
          Blogs
        </h1>
        <p class="max-w-2xl text-lg text-zinc-700">
          Welcome to the place where my own competencies or entertaining information are compiled and written down!
        </p>
      </div>

      <div class="grid grid-cols-1 mx-auto max-w-4xl gap-4 px-5 sm:grid-cols-2">
        <NuxtLink v-for="blog in blogs?.data" :key="blog.id" class="content group" :to="`/blogs/${blog.slug}`">
          <div class="flex items-start justify-between gap-2 px-4 py-6">
            <div class="flex flex-col justify-center gap-2">
              <h1 class="title">
                {{ blog.title }}
              </h1>
              <p class="description">
                {{ blog.description ? blog.description : 'Learn More' }}
              </p>
            </div>
            <a
              class="border border-zinc-200 rounded-full p-2 transition group-hover:(border-transparent bg-[rgba(var(--primary),0.4)])"
            >
              <div class="i-ph-arrow-up-right h-5 w-5 md:h-9 md:w-9" />
            </a>
          </div>
          <div class="photoContainer">
            <NuxtImg sizes="100vw sm:50vw md:400px" class="photo" :src="blog.thumbnail || ''" :alt="blog.title" :placeholder="thumbnail" />
          </div>
        </NuxtLink>
      </div>
    </template>

    <div v-else class="w-full flex flex-col items-center justify-center gap-2 pt-24">
      <div class="rounded-full bg-white p-2">
        <NuxtImg src="img/empty.png" class="h-36 w-36" draggable="false" alt="Empty" />
      </div>

      <h1 class="text-2xl font-medium text-zinc-900">
        Oops!
      </h1>
      <p class="text-zinc-500">
        There are no posts here yet, come back soon!
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.content {
  @apply w-full max-w-md hover:rotate-4 hover:z-99 bg-white/50 backdrop-blur-lg rounded-xl shadow-sm flex flex-col gap-2 p-2 transition duration-300 ease-in-out hover:(bg-neutral-50);

  .title {
    @apply text-lg md:text-2xl font-medium capitalize;
  }

  .description {
    @apply font-medium text-zinc-500 block truncate w-full max-w-xs;
  }

  .photoContainer {
    @apply flex justify-center p-5 rounded-xl overflow-hidden bg-zinc-100;

    .photo {
      @apply object-cover rounded-xl h-56 w-full;
    }
  }
}
</style>
