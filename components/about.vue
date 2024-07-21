<script lang="ts" setup>
const about = reactive([
  {
    title: 'What Influenced Your Path in Frontend and UI/UX, and How Do You Stay Proficient?',
    description: 'My interest in frontend development and UI/UX design stemmed from a desire to create engaging digital experiences. I recognized the importance of harmonizing aesthetics with functionality early on, which led me to explore both disciplines simultaneously. To maintain proficiency, I prioritize continuous learning and practice, leveraging resources like online courses and tutorials to stay updated with industry standards and best practices.',
    active: false,
  },
  {
    title: 'Impact of Open-Source Involvement on Your Skills?',
    description: 'Contributing to open-source projects has been instrumental in broadening my skill set and reinforcing core principles. By collaborating with peers on real-world projects, I\'ve gained practical experience in coding and design, honed my problem-solving abilities, and learned to adapt to different project requirements. Moreover, exposure to diverse perspectives within the open-source community has deepened my understanding of industry trends and user preferences.',
    active: false,
  },
])

function toggleAcordion(index: number) {
  // eslint-disable-next-line array-callback-return
  about.map((item: { active: boolean }, i: number) => {
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
  <section id="about" class="aContainer">
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
        <div class="w-full flex items-center justify-between">
          <h1 class="title">
            {{ question.title }}
          </h1>
          <div class="i-ph-x-bold h-4 w-4 flex-shrink-0 transition duration-300" :class="question.active ? 'rotate-0 opacity-100' : 'rotate-45 opacity-70' " />
        </div>
        <div class="overflow-hidden transition-all" :style="{ height: question.active ? `${getHeight(acordionAnswerEl[index])}px` : 0 }">
          <p
            :ref="(el) => (acordionAnswerEl[index] = el)"
            class="description"
          >
            {{ question.description }}
          </p>
        </div>
      </button>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.aContainer {
  @apply bg-white/50 backdrop-blur-lg rounded-xl shadow-sm px-6 py-10 mt-10 sm:px-6 lg:px-8 lg:py-14 mx-auto;

  .titleWrap {
    @apply mx-auto flex flex-col space-y-4 items-center mb-10 lg:mb-14;

    .title {
      @apply text-2xl font-bold sm:text-3xl md:text-4xl md:leading-tight dark:text-white;
    }
    .description {
      @apply mt-1 text-gray-600 text-center;
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
        @apply text-xl font-medium text-left;
      }

      .description {
        @apply transition-all text-left ease-in-out text-zinc-900 opacity-0 pointer-events-none;
      }
    }
  }
}
</style>
