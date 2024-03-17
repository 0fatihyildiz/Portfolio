<script lang="ts" setup>
import type { Work } from '@/composables/types'
import { animate, glide } from '@productdevbook/motion';
import type { Repository } from '~/types/github';

const { data: github_repos } = await useFetch<Repository[]>(`https://api.github.com/users/${config.socials.find(item => item.name === 'Github')?.username}/repos`)

const works: Work[] = (github_repos.value || []).filter(item => {
  return item.topics.length && !item.fork && !!item.description
}).map(item => ({
  id: item.id,
  image: `https://opengraph.githubassets.com/a/${item.full_name}`,
  description: item.description,
  link: item.url,
  name: item.name,
  review: {
    explain: item.description,
    tags: item.topics
  }
}
))

const tags = ref<HTMLElement | null>(null)

onMounted(() => {
  if (tags.value)
    animate(tags.value, { x: 0 }, { easing: glide({ velocity: 0 }) })
})

</script>

<template>
  <section id="works" class="wContainer">
    <NuxtLink v-for="work in works" :key="work.id" class="work" :to="work.link">
      <div class="content group">
        <div class="flex justify-between px-8 py-6">
          <div>
            <h1 class="title">
              {{ work.name }}
            </h1>
            <p class="description">
              {{ work.description }}
            </p>
          </div>
          <a :href="work.link"
            class="border border-zinc-200 rounded-full p-2 transition hover:(border-transparent bg-[rgba(var(--primary),0.4)])">
            <div class="i-ph-arrow-up-right h-12 w-12" />
          </a>
        </div>
        <div class="photoContainer">
          <img class="photo" :src="work.image" :alt="work.name">
        </div>
      </div>
      <div class="review">
        <!-- TODO -->
        <div class="h-1/3 w-full flex items-center justify-center p-12">
          <div class="pattern">
            <OtherPattern class="h-12 w-12 text-zinc-950" />
          </div>
        </div>
        <div class="content">
          <div class="flex flex-col gap-2">
            <h1 class="explain">
              {{ work.review.explain }}
            </h1>
            <div ref="tags" class="tags">
              <div v-for="tag in work.review.tags" :key="tag" class="tag">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>

<style lang="postcss" scoped>
.wContainer {
  @apply w-full flex flex-col gap-6 w-full;

  .work {
    @apply flex gap-6 w-full;

    &:nth-child(even) {
      @apply flex-row-reverse;
    }

    .content {
      @apply w-full md:w-2/3 bg-white/50 backdrop-blur-lg rounded-xl shadow-sm flex flex-col gap-2 p-4;

      .title {
        @apply text-4xl font-bold;
      }

      .description {
        @apply font-medium text-zinc-500 block md:hidden;
      }

      .photoContainer {
        @apply flex justify-center p-12 rounded-xl overflow-hidden bg-zinc-100;

        .photo {
          @apply object-cover rounded-xl;
        }
      }
    }

    .review {
      @apply w-1/3 bg-white/50 backdrop-blur-lg rounded-xl shadow-sm hidden md:flex flex-col gap-2 p-4;

      .content {
        @apply flex flex-col justify-center overflow-hidden shadow-inset shadow-sm flex-col gap-2 bg-zinc-100 w-full h-2/3 p-4 after:(content-[''] absolute bottom-0 -left-10 w-12 h-full bg-gradient-to-r from-zinc-200 to-transparent) before:(content-[''] absolute bottom-0 -right-10 w-12 h-full bg-gradient-to-r from-transparent to-zinc-200);

        .explain {
          @apply text-2xl font-bold text-center;
        }

        .tags {
          @apply relative flex justify-start gap-2 mt-4;

          .tag {
            @apply text-zinc-900 bg-white shadow-sm rounded-full py-1 px-8 font-medium whitespace-nowrap;
          }
        }
      }
    }
  }
}
</style>
