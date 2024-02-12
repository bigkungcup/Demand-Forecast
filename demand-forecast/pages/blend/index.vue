<template>
    <div>
        <WmaDetail :name="name" :price="price" :formular="formular" :image="images" :number="numbers" :cc="CC" :co="Co" :ss="SS" :l="L">
        </WmaDetail>
    </div>

</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

const name = ref('BLEND 285');
const price = ref(299);
const formular = ref('Weight Moving Average');
const images = ref('/images/blend285.png');

const numbers = [
    13, 5, 9, 21, 24, 18, 30, 16, 24, 17,
    16, 4, 17, 11, 10, 4, 2, 2, 1, 3,
    9, 6, 7, 2, 10, 13, 20, 14, 8, 14,
    10, 5, 3, 4, 2, 6, 12, 1, 6, 8,
    7, 4, 1, 16, 1, 0, 0, 8, 7, 10, 11, 27
];

const Co = 76.15;
const CC = 65;

const SS = 8;
const L = 0.29;

</script>

<style scoped></style>