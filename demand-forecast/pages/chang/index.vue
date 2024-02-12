<template>
    <div>
        <ItemDetail :name="name" :price="price" :formular="formular" :image="images" :number="numbers" :cc="CC" :co="Co" :ss="SS" :l="L"> 
        </ItemDetail>
    </div>

</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

const name = ref('CHANG');
const price = ref(85);
const formular = ref('Linear trend Equation');
const images = ref('/images/changBeer.jpg');

const numbers = [
    596, 736, 784, 749, 977, 1097, 1114, 884, 1154, 783,
    730, 445, 1248, 786, 796, 628, 599, 826, 649, 664,
    784, 698, 819, 774, 943, 1658, 782, 589, 646, 819,
    602, 628, 658, 828, 690, 607, 597, 532, 538, 524,
    517, 342, 29, 960, 451, 513, 479, 852, 1018, 426, 1004, 1176
];

const Co = 76.15;
const CC = 15;

const L = 0.29;
const SS = 275;

</script>

<style scoped></style>