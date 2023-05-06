<script lang="ts" setup>
interface Work {
  id: number
  name: string
  description: string
  image: string
  link: string
  review: {
    explain: string
    tags: string[]
    comments: {
      avatar: string
      name: string
      job_title: string
      comment: string
    }[]
  }
}

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
      comments: [
        {
          avatar:
            'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          job_title: 'Frontend Developer',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar:
            'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          job_title: 'Frontend Developer',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar:
            'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          job_title: 'Frontend Developer',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
      ],
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
      comments: [
        {
          avatar:
            'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          job_title: 'customer',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar:
            'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          job_title: 'customer',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar:
            'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          job_title: 'customer',
          comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
      ],
    },
  },
]
</script>

<template>
  <section class="wContainer">
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
            class="transition border border-zinc-200 hover:(border-transparent bg-yellow-300) rounded-full p-2"
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
        <div class="h-48 w-full p-12 flex items-center justify-center">
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
          <div class="comments">
            <!-- TODO -->
            <div v-for="comment in work.review.comments" :key="comment.name" class="comment">
              <div class="flex flex-col-reverse gap-4">
                <div class="flex gap-4">
                  <img class="avatar" :src="comment.avatar" :alt="comment.name">
                  <div class="-space-y-1">
                    <h1 class="name">
                      {{ comment.name }}
                    </h1>
                    <h3 class="job_title">
                      {{ comment.job_title }}
                    </h3>
                  </div>
                </div>
                <p class="commentMessage">
                  {{ comment.comment }}
                </p>
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
  @apply w-full flex flex-col gap-6 pt-24 w-full mt-36;

  .work {
    @apply flex gap-6 w-full;

    &:nth-child(even) {
      @apply flex-row-reverse;
    }

    .content {
      @apply w-2/3 bg-white rounded-xl shadow-sm flex flex-col gap-2 p-4;
      .title {
        @apply text-4xl font-bold;
      }
      .description {
        @apply font-medium text-zinc-500;
      }

      .photoContainer {
        @apply flex justify-center p-12 rounded-xl overflow-hidden bg-zinc-100;
        .photo {
          @apply object-cover rounded-xl;
        }
      }
    }
    .review {
      @apply w-1/3 bg-white rounded-xl shadow-sm flex flex-col gap-2 p-4;

      .content {
        @apply flex flex-col justify-between overflow-hidden shadow-inset shadow-sm flex-col gap-2 bg-zinc-100 pt-24 w-full h-full p-4;
        .explain {
          @apply text-2xl font-bold text-center;
        }
        .tags {
          @apply relative flex justify-center gap-2 mt-4 after:(content-[''] absolute bottom-0 -left-10 w-12 h-full bg-gradient-to-r from-zinc-200 to-transparent) before:(content-[''] absolute bottom-0 -right-10 w-12 h-full bg-gradient-to-r from-transparent to-zinc-200);
          .tag {
            @apply text-zinc-900 bg-white shadow-sm rounded-full py-1 px-8 font-medium whitespace-nowrap;
          }
        }
        .comments {
          @apply relative flex gap-4 mt-4;
          .comment {
            @apply flex flex-shrink-0 w-full bg-white p-4 rounded-lg shadow-sm flex-col gap-2;
            .avatar {
              @apply rounded-full w-10 h-10 object-cover;
            }
            .name {
              @apply font-medium text-shadow-sm;
            }
            .job_title {
              @apply text-sm capitalize text-zinc-500;
            }
            .commentMessage {
              @apply relative z-10 font-semibold text-lg text-zinc-800 before:(content-['\\201C'] text-8xl absolute -z-10 text-zinc-200);
            }
          }
        }
      }
    }
  }
}
</style>
