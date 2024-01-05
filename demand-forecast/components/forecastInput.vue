<template>
    <v-card class="tw-py-5" variant="flat">
        <!-- <v-card-title
            class="tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
            ข้อมูลยอดขายรายอาทิตย์
        </v-card-title> -->
        <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-flex-col tw-space-y-5 tw-px-60">
            <v-responsive class="mx-auto" max-width="344">
                <v-text-field clearable hide-details="auto" label="Last name"></v-text-field>
            </v-responsive>

        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

// const props = defineProps<{
//     week1: number,
//     week2: number,
//     week3: number,
// }>()

</script>

<style scoped></style>