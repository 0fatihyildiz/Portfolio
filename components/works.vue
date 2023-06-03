<script lang="ts" setup>
import type { Work } from '@/composables/types'

const works: Work[] = [
  {
    id: 1,
    name: 'Unocss',
    description: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
    image:
      'https://cdn.dribbble.com/users/5582142/screenshots/20303050/media/7d30ed06a2ad2bf8d1f23a4733a04138.png?compress=1&resize=1000x750&vertical=top',
    link: 'https://google.com',
    review: {
      explain: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
      tags: ['Vue', 'CSS-in-JS', 'Utility-first'],
    },
  },
  {
    id: 2,
    name: 'Unocss',
    description: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
    image:
      'https://cdn.dribbble.com/users/5582142/screenshots/20303050/media/7d30ed06a2ad2bf8d1f23a4733a04138.png?compress=1&resize=1000x750&vertical=top',
    link: 'https://google.com',
    review: {
      explain: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
      tags: ['Vue', 'CSS-in-JS', 'Utility-first'],
    },
  },
]
</script>

<template>
  <section id="works" class="wContainer">
    <!-- TODO: link -->
    <div v-for="work in works" :key="work.id" class="work">
      <div class="content">
        <div class="flex justify-between px-8 py-6">
          <div>
            <h1 class="title">
              {{ work.name }}
            </h1>
            <p class="description">
              {{ work.description }}
            </p>
          </div>
          <a
            :href="work.link"
            class="border border-zinc-200 rounded-full p-2 transition hover:(border-transparent bg-[rgba(var(--primary),0.4)])"
          >
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
            <div class="tags">
              <div v-for="tag in work.review.tags" :key="tag" class="tag">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      @apply w-full md:w-2/3 bg-white rounded-xl shadow-sm flex flex-col gap-2 p-4;
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
      @apply w-1/3 bg-white rounded-xl shadow-sm hidden md:flex flex-col gap-2 p-4;

      .content {
        @apply flex flex-col justify-center overflow-hidden shadow-inset shadow-sm flex-col gap-2 bg-zinc-100 w-full h-2/3 p-4;
        .explain {
          @apply text-2xl font-bold text-center;
        }
        .tags {
          @apply relative flex justify-center gap-2 mt-4 after:(content-[''] absolute bottom-0 -left-10 w-12 h-full bg-gradient-to-r from-zinc-200 to-transparent) before:(content-[''] absolute bottom-0 -right-10 w-12 h-full bg-gradient-to-r from-transparent to-zinc-200);
          .tag {
            @apply text-zinc-900 bg-white shadow-sm rounded-full py-1 px-8 font-medium whitespace-nowrap;
          }
        }
      }
    }
  }
}
</style>
