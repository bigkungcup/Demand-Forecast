<template>
    <div>
        <DecompositionDetail :name="name" :price="price" :formular="formular" :image="images" :number="numbers" :cc="CC" :co="Co" :ss="SS" :l="L">
        </DecompositionDetail>
    </div>

</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

const name = ref('HONGTHONG');
const price = ref(299);
const formular = ref('Decomposition');
const images = ref('/images/hongthongRum.jpg');

const numbers = [
    317, 561, 905, 732, 620, 753, 774, 717, 890, 831,
    839, 978, 802, 1011, 822, 649, 910, 773, 704, 802,
    926, 1050, 968, 1098, 920, 986, 1025, 989, 787, 982,
    710, 608, 818, 832, 903, 1031, 807, 668, 791, 894,
    851, 660, 56, 652, 781, 673, 695, 1219, 1207, 968, 1255, 1198
];

const Co = 76.15;
const CC = 62.5;

const L = 0.29;
const SS = 5;

</script>

<style scoped></style>