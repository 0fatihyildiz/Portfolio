<script setup lang="ts">
const video = ref<HTMLVideoElement>()
onMounted(() => {
  video.value?.play()
})
</script>

<template>
  <div class="my-24 relative isolate overflow-hidden bg-gray-900 pt-16 shadow-2xl sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:pt-0">
    <div class="mx-auto text-center lg:py-32 bg-black/60 w-full px-6 sm:px-16 lg:px-24">
      <h2 class="text-5xl font-bold tracking-tight text-white">
        Want to start a project?
      </h2>
      <p class="mt-6 text-lg mx-auto leading-8 text-gray-300 max-w-xl">
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="" class="btn border border-white">Let's Talk to me</a>
      </div>
    </div>
    <video ref="video" src="@/assets/videos/want.mp4" class="w-full h-full object-cover absolute left-1/2 -translate-x-1/2 -z-10" autoplay loop />
  </div>
</template>
