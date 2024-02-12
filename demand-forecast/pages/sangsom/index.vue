<template>
    <div>
        <DecompositionDetail :name="name" :price="price" :formular="formular" :image="images" :number="numbers" :cc="CC" :co="Co" :ss="SS" :l="L">
        </DecompositionDetail>
    </div>

</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

const name = ref('SANGSOM');
const price = ref(329);
const formular = ref('Decomposition');
const images = ref('/images/sangsomRum.jpg');

const numbers = [
    44, 59, 33, 99, 86, 70, 112, 80, 104, 69,
    34, 55, 90, 64, 40, 26, 45, 48, 46, 30,
    49, 62, 55, 51, 64, 143, 75, 85, 75, 62,
    54, 45, 35, 81, 54, 66, 58, 34, 46, 105,
    52, 25, 1, 66, 37, 20, 34, 67, 55, 50, 48, 79
];

const Co = 76.15;
const CC = 72.5;

const L = 0.29;
const SS = 27;

</script>

<style scoped></style>