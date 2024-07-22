<script lang="ts" setup>
const isOpen = defineModel<Boolean>()

const modal = ref(null)

onClickOutside(modal, () => isOpen.value = false)
</script>

<template>
  <div class="relative z-50" :class="!modal && 'pointer-events-none'" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <Transition
      enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity" />
    </Transition>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="min-h-full flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <Transition
          enter-active-class="ease-out duration-300" enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200" leave-from-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            v-if="isOpen" ref="modal"
            class="relative transform overflow-hidden border border-zinc-100 rounded-2xl bg-white bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:w-full"
          >
            <slot />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
