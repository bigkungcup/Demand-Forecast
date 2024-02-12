<template>
    <div>
        <DecompositionDetail :name="name" :price="price" :formular="formular" :image="images" :number="numbers" :cc="CC" :co="Co" :ss="SS" :l="L">
        </DecompositionDetail>
    </div>

</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

const name = ref('REGENCY');
const price = ref(459);
const formular = ref('Decomposition');
const images = ref('/images/regencyRum.png');

const numbers = [
    10, 22, 31, 32, 24, 43, 37, 41, 44, 23,
    45, 41, 43, 51, 42, 28, 37, 23, 21, 31,
    41, 32, 38, 35, 23, 40, 24, 39, 12, 31,
    17, 26, 29, 24, 12, 11, 20, 13, 9, 17,
    19, 11, 0, 18, 18, 22, 13, 40, 20, 33, 38, 36
];

const Co = 76.15;
const CC = 87.5;

const L = 0.29;
const SS = 49;
</script>

<style scoped></style>