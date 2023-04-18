<script lang="ts" setup>
const canvas = ref<HTMLCanvasElement | undefined>()

function resize() {
  const w = window.innerWidth
  const h = window.innerHeight
  canvas.value?.setAttribute('width', w.toString())
  canvas.value?.setAttribute('height', h.toString())
}

function noise(canvas: HTMLCanvasElement | undefined) {
  const noiseFrame = canvas
  const ctx = noiseFrame?.getContext('2d')
  const w = ctx?.canvas.width || 0
  const h = ctx?.canvas.height || 0
  const idata = ctx?.createImageData(w, h)
  const buffer32 = new Uint32Array(idata?.data.buffer as ArrayBuffer)
  const len = buffer32.length

  for (let i = 0; i < len; i++)
    buffer32[i++] = 0xFF000000 | (Math.random() * 0x00FFFFFF)
  ctx?.putImageData(idata as ImageData, 0, 0)
}

onMounted(() => {
  (function loopFrame() {
    noise(canvas.value)
    requestAnimationFrame(loopFrame)
  })()
  window.addEventListener('resize', resize)
  resize()
})
</script>

<template>
  <teleport to="body">
    <canvas ref="canvas" class="z-20 fixed opacity-15 backdrop-blur-lg pointer-events-none select-none" />
  </teleport>
</template>
