<script lang="ts" setup>
import type { Work } from '@/composables/types'
import { animate, glide } from '@productdevbook/motion';
import type { PinnedRepostories } from '~/types/github';

const githubUsername = config.socials.find(item => item.name === 'Github')?.username
const repoAndOwner = (url: string) => {
  const repoAndOwnerName = url.split('/')

  return `${repoAndOwnerName.at(-2)}/${repoAndOwnerName.at(-1)}`
}
const { data: github_repos } = await useFetch<{ response: PinnedRepostories[] }>(`https://gh-pinned-repos-api.ysnirix.xyz/api/get/?username=${githubUsername}`)


const works: Work[] = (github_repos.value?.response || [])?.map((item, id) => ({
  id,
  image: `https://opengraph.githubassets.com/a/${repoAndOwner(item.repo)}`,
  description: item.description,
  link: item.repo,
  name: item.name,
  review: {
    explain: item.description,
    tags: ['test', 'test1', 'test2', 'test3']
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
              {{ work.name.split('-').join(' ') }}
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
            <div ref="tags">
              <Marquee>
                <div v-for="tag in work.review.tags" :key="tag" class="tag">
                  {{ kebapCaseToSentance(tag) }}
                </div>
              </Marquee>
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
        @apply text-4xl font-semibold capitalize;
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
        @apply flex flex-col justify-center overflow-hidden shadow-inset shadow-sm flex-col gap-2 bg-zinc-100 w-full h-2/3 py-4 px-0 after:(content-[''] absolute bottom-0 -left-0 w-12 h-full bg-gradient-to-r from-zinc-100 to-transparent) before:(content-[''] absolute bottom-0 right-0 z-10 w-12 h-full bg-gradient-to-r from-transparent to-zinc-100);

        .explain {
          @apply text-lg font-bold text-center px-4 pb-4 z-10;
        }

        .marquee {
          @apply m-0
        }

        .vue3-marquee {
          @apply relative flex justify-start space-x-4;

          .tag {
            @apply text-zinc-900 bg-white shadow-sm rounded-full py-1 px-8 font-medium whitespace-nowrap mr-4;
          }
        }
      }
    }
  }
}
</style>
