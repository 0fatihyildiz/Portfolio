<script lang="ts" setup>
import type { PinnedRepos } from '~/server/types'

const githubUsername = config.socials.find(item => item.name === 'Github')?.username

const { data: github_repos } = await useFetch<PinnedRepos[]>(`/api/${githubUsername}`)
</script>

<template>
  <section id="works" class="wContainer">
    <PresenceGroup>
      <Motion v-for="(work, idx) in github_repos" :key="idx" class="work" :initial="initialKeyframes" :animate="animateKeyframes" :transition="transition(0.7)">
        <NuxtLink class="content group" :to="work.link">
          <div class="flex items-start justify-between gap-2 px-4 py-6">
            <div class="flex flex-col justify-center">
              <h1 class="title">
                {{ work.name.split('-').join(' ') }}
              </h1>
              <p class="description">
                {{ work.description }}
              </p>
            </div>
            <a
              :href="work.link"
              class="border border-zinc-200 rounded-full p-2 transition group-hover:(border-transparent bg-[rgba(var(--primary),0.4)])"
            >
              <div class="i-ph-arrow-up-right h-8 w-8 md:h-12 md:w-12" />
            </a>
          </div>
          <div class="photoContainer">
            <NuxtImg sizes="100vw sm:50vw md:400px" class="photo" :src="work.image" :alt="work.name" />
          </div>
        </NuxtLink>
        <div class="review">
          <div class="h-1/3 w-full flex items-center justify-center p-12">
            <div class="pattern">
              <OtherPattern class="h-12 w-12 text-zinc-950" />
            </div>
          </div>
          <div class="content">
            <div class="flex flex-col gap-2">
              <h1 class="explain">
                {{ work.description }}
              </h1>
              <div>
                <Marquee>
                  <div v-for="tag in work.topics" :key="tag" class="tag">
                    {{ kebapCaseToSentance(tag) }}
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </PresenceGroup>
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
      @apply w-full md:w-2/3 bg-white/50 backdrop-blur-lg rounded-xl shadow-sm flex flex-col gap-2 p-4 transition duration-300 ease-in-out hover:(bg-neutral-50);

      .title {
        @apply text-2xl md:text-4xl font-semibold capitalize;
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
        @apply flex flex-col justify-center overflow-hidden shadow-inset shadow-sm flex-col gap-2 bg-zinc-100 w-full h-2/3 py-4 px-0 hover:( scale-100 ) after:(content-[''] absolute bottom-0 -left-0 w-12 h-full bg-gradient-to-r from-zinc-100 to-transparent) before:(content-[''] absolute bottom-0 right-0 z-10 w-12 h-full bg-gradient-to-r from-transparent to-zinc-100);

        .explain {
          @apply text-lg font-bold text-center px-4 pb-4 z-10;
        }

        .marquee {
          @apply !ml-0
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
