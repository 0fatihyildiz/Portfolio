<script lang="ts" setup>
import { useGeneralStore } from '~/store';

const canvas = ref<HTMLCanvasElement | undefined>()
const isMounted = useMounted()

function resize() {
  const w = window.innerWidth
  const h = window.innerHeight
  canvas.value?.setAttribute('width', w.toString())
  canvas.value?.setAttribute('height', h.toString())
}

function noise(canvas: HTMLCanvasElement | undefined) {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;


  const imageData = ctx.createImageData(w, h);
  const data = imageData.data;


  const randomColor = () => 0xFF000000 | (Math.random() * 0x00FFFFFF);


  for (let i = 0; i < data.length; i += 4) {
    const color = randomColor();
    data[i] = (color >> 24) & 0xFF;
    data[i + 1] = (color >> 16) & 0xFF;
    data[i + 2] = (color >> 8) & 0xFF;
    data[i + 3] = color & 0xFF;
  }

  ctx.putImageData(imageData, 0, 0);
}
let animationId: number | null = null;

function animateNoise() {
  noise(canvas.value);
  animationId = requestAnimationFrame(animateNoise);
}

onMounted(() => {
  window.addEventListener('resize', () => {
    resize();
  });
  resize();
  animateNoise();
})

onUnmounted(() => {
  if(animationId)
    cancelAnimationFrame(animationId);
});
</script>

<template>
  <teleport to="body">
    <canvas v-if="isMounted" class="pointer-events-none fixed select-none opacity-20" id="gradient-canvas" data-transition-in />
    <canvas ref="canvas" class="pointer-events-none fixed z-30 select-none opacity-10 backdrop-blur-lg" />
  </teleport>
</template>
