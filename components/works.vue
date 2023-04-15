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
      comment: string
    }[]
  }
}

const work: Work[] = [
  {
    id: 1,
    name: 'Unocss',
    description: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
    image: 'https://cdn.dribbble.com/users/5582142/screenshots/20303050/media/7d30ed06a2ad2bf8d1f23a4733a04138.png?compress=1&resize=1000x750&vertical=top',
    link: 'google.com',
    review: {
      explain: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
      tags: ['Vue', 'CSS-in-JS', 'Utility-first'],
      comments: [
        {
          avatar: 'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'Unocss',
    description: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
    image: 'https://cdn.dribbble.com/users/5582142/screenshots/20303050/media/7d30ed06a2ad2bf8d1f23a4733a04138.png?compress=1&resize=1000x750&vertical=top',
    link: 'google.com',
    review: {
      explain: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
      tags: ['Vue', 'CSS-in-JS', 'Utility-first'],
      comments: [
        {
          avatar: 'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
      ],
    },
  },
  {
    id: 3,
    name: 'Unocss',
    description: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
    image: 'https://cdn.dribbble.com/users/5582142/screenshots/20303050/media/7d30ed06a2ad2bf8d1f23a4733a04138.png?compress=1&resize=1000x750&vertical=top',
    link: 'google.com',
    review: {
      explain: 'Unocss is a utility-first CSS-in-JS library for Vue 3.',
      tags: ['Vue', 'CSS-in-JS', 'Utility-first'],
      comments: [
        {
          avatar: 'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/47571500?s=400&u=7a5272427cd5185f06e20e14d28e650d43359ffe&v=4',
          name: 'John Doe',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        },
      ],
    },
  },
]
</script>

<template>
  <div class="w_container">
    <div class="work">
      <div>
        <h1 class="title">Lorem ipsum dolor sit amet</h1>
        <p>test</p>
      </div>
      <div>
        <img src="" alt="">
      </div>
    </div>
    <div class="review" />
  </div>
</template>

<style lang="postcss" scoped>
.w_container {
    @apply flex flex-col items-center justify-center py-24 w-full mt-36 bg-red-400;

    .work {
      @apply flex flex-col items-center justify-center w-full;
      .title {
        @apply text-4xl font-bold text-center;
      }
      p {
        @apply text-center;
      }
    }
}
</style>
