<script setup lang="ts">
import { useModalStore } from '~/store';

const modals = useModalStore()
</script>

<template>
    <ModalLayout v-model="modals.contact">
        
        <div class="pt-6 px-4 text-4xl flex flex-col">
            <span class="text-lg">Lorem ipsum dolor sit.</span>
            Lorem ipsum dolor sit
        </div>
        <form action="" class="p-4 flex flex-col gap-2">
            <FormInput placeholder="Full name" label="Full name" name="full-name" />
            <FormInput label="Email" placeholder="Email" name="email" type="email" />
            <FormTextarea label="Message" name="message" />

            <button class="btn w-full mt-4">Get in Touch</button>
        </form>
    </ModalLayout>
</template>

<style scoped></style>