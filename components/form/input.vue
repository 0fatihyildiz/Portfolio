<script setup lang="ts">
interface Input {
    label: string
    name: string,
    placeholder?: string
    type?: 'text' | 'email',
}

defineProps<Input>()

const value = defineModel<string>({
    set: (v) => String(v)
})
</script>

<template>
    <div>
        <label :for="name" class="block text-sm font-medium leading-6 text-gray-900">
            {{ label }}
        </label>
        <div class="mt-1">
            <input v-model="value" :id="name" v-bind="{ name, placeholder, type }" class="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-0.5 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[rgba(var(--primary), 1)] sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>

<style scoped></style>