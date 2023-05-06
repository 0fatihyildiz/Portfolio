<script lang="ts" setup>
const about = reactive([
  {
    title: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit consectetur numquam.',
    active: false,
  },
  {
    title: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit consectetur numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit consectetur numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit consectetur numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit consectetur numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit consectetur numquam.',
    active: false,
  },
])

function toggleAcordion(index: number) {
  about.forEach((item, i) => {
    if (i === index)
      item.active = !item.active
    else item.active = false
  })
}

const acordionAnswerEl = ref<any>([])

function getHeight(el: HTMLParagraphElement) {
  if (el)
    return el.getClientRects()[0].height
}
</script>

<template>
  <section id="about" class="about">
    <div class="titleWrap">
      <div class="pattern">
        <OtherPattern class="h-12 w-12 text-zinc-950" />
      </div>
      <h2 class="title">
        Your questions, answered
      </h2>
      <p class="description">
        Answers to the most frequently asked questions.
      </p>
    </div>
    <div class="acordions">
      <button
        v-for="(question, index) in about"
        :key="index"
        class="acordion"
        :class="{ active: question.active }"
        @click="toggleAcordion(index)"
      >
        <div class="w-full flex justify-between items-center">
          <h1 class="title">
            {{ question.title }}
          </h1>
          <div class="i-ph-triangle-fill h-2 w-2 transition duration-300" :class="question.active ? 'rotate-0' : 'rotate-180' " />
        </div>
        <div class="transition-all" :style="{ height: question.active ? `${getHeight(acordionAnswerEl[index])}px` : 0 }">
          <p
            :ref="(el) => (acordionAnswerEl[index] = el)"
            class="description"
          >
            {{ question.description }}
          </p>
        </div>
      </button>
    </div>
    <div class="mx-auto w-full flex justify-center pt-12">
      <button class="btn">
        Contact Me
      </button>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.about {
  @apply bg-white rounded-xl shadow-sm px-6 py-10 mt-10 sm:px-6 lg:px-8 lg:py-14 mx-auto;

  .titleWrap {
    @apply mx-auto flex flex-col space-y-4 items-center text-center mb-10 lg:mb-14;

    .title {
      @apply text-2xl font-bold md:text-4xl md:leading-tight dark:text-white;
    }
    .description {
      @apply mt-1 text-gray-600 dark:text-gray-400;
    }
  }

  .acordions {
    @apply mx-auto space-y-4;

    .acordion {
      @apply transition-all ease-in-out rounded-xl p-6 border border-zinc-100 w-full flex flex-col scale-100 cursor-pointer;

      &.active {
        @apply bg-gray-50 scale-102 pb-12;

        .description {
          @apply opacity-100 mt-4;
        }
      }

      .title {
        @apply text-xl font-medium;
      }

      .description {
        @apply transition-all text-left ease-in-out text-zinc-900 dark:text-gray-400 opacity-0;
      }
    }
  }
}
</style>
