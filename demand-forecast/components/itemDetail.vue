<template>
    <v-card class="tw-py-5" variant="flat">
        <v-card-title
            class="tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
            <img :src="image" :alt="name" class="tw-w-2/12 tw-h-2/12 tw-max-h-72" />
        </v-card-title>

        <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-flex-col tw-space-y-5 tw-px-60">
            <div>
                ชื่อ: {{ name }}
            </div>

            <div>
                ราคาต่อขวด: {{ price }}
            </div>

            <div class="tw-my-5">
                วิธีที่ใช้ในการพยากรณ์: {{ formular }}
            </div>


            <div class="tw-grid tw-gap-y-5 tw-pt-10">
                <div>
                    ข้อมูลยอดขายรายอาทิตย์ (10 - 52 สัปดาห์)
                </div>
                <div class="tw-flex tw-items-center tw-space-x-5">
                    <span>
                        จำนวนข้อมูลรายอาทิตย์
                    </span>
                    <v-responsive max-width="80">
                        <v-text-field clearable hide-details="auto"></v-text-field>
                    </v-responsive>
                </div>

            </div>

            <div class="tw-grid tw-grid-cols-3 tw-gap-5 tw-items-center">
                <div v-for="(data, index) in inputList">
                    <div class="tw-flex tw-flex-row tw-items-center tw-space-x-5">
                        <span>{{ index + 1 }}.</span>
                        <v-responsive class="mx-auto" max-width="400">
                            <v-text-field clearable hide-details="auto" :label="`สัปดาห์ที่ ${index + 1} `"></v-text-field>
                        </v-responsive>
                    </div>
                </div>
                <v-icon @click="addInput">mdi-plus</v-icon>
            </div>
        </v-card-text>

        <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
            <v-btn rounded class="tw-text-white tw-bg-blue-600 tw-w-36">OK</v-btn>
        </v-card-text>
    </v-card>
    <hr class="tw-border-black tw-bg-black">
    <v-card class="tw-py-5 tw-grid tw-grid-cols-2" variant="flat">
        <div class="tw-grid tw-grid-cols-2 tw-gap-5">
            <div>
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    ค่าพยากรณ์สัปดาห์ถัดไป
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="250">
                        <v-text-field clearable hide-details="auto" label="ค่าพยากรณ์"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div>

            <div>
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    ยอดขายรวมทุกสัปดาห์
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="250">
                        <v-text-field clearable hide-details="auto" label="ยอดขายรวมทุกสัปดาห์"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div>

            <div class="tw-col-span-2">
                <v-card-title
                    class="tw-text-2xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-y-5 tw-py-10">
                    ความคลาดเคลื่อนกำลังสองเฉลี่ย (MSE)
                </v-card-title>

                <v-card-text class="tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center tw-space-y-5 ">
                    <v-responsive class="mx-auto" max-width="270">
                        <v-text-field clearable hide-details="auto" label="ความคลาดเคลื่อนกำลังสองเฉลี่ย"></v-text-field>
                    </v-responsive>
                </v-card-text>
            </div>

        </div>
    </v-card>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

interface Card {
    week: number,
    value: number
}

const props = defineProps<{
    name: string,
    price: number,
    formular: string,
    image: string,
}>()

const path = "~"

const inputList = ref(Array<Card>());

onBeforeMount(() => {
    for (let i = 0; i < 10; i++) {
        const data = {
            week: i + 1,
            value: 0
        }
        inputList.value.push(data);
    }
})

function addInput() {
    const data = {
        week: inputList.value.length + 1,
        value: 0
    }
    inputList.value.push(data);
}

</script>

<style scoped></style>