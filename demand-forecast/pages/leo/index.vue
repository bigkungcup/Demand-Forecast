<template>
    <div>
        <WmaDetail :name="name" :price="price" :formular="formular" :image="images" :number="numbers" :cc="CC" :co="Co" :ss="SS" :l="L">
        </WmaDetail>
    </div>

</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

const name = ref('LEO');
const price = ref(85);
const formular = ref('Weight Moving Average');
const images = ref('/images/leoBeer.png');
const numbers = [
    735, 633, 806, 964, 1003, 1117, 1138, 932, 971, 1073,
    800, 697, 879, 1066, 523, 524, 660, 770, 588, 739,
    795, 837, 891, 891, 986, 1120, 981, 1063, 969, 1103,
    1089, 854, 881, 1585, 1087, 811, 922, 601, 641, 875,
    782, 292, 51, 560, 495, 389, 816, 1017, 1127, 570, 1107, 1096
];

const Co = 76.15;
const CC = 15;

const SS = 272;
const L = 0.29;

</script>

<style scoped></style>