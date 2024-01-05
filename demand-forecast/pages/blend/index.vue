<template>
    <div>
        <ItemDetail :name="name" :price="price" :formular="formular" :image="images">
        </ItemDetail>
    </div>

</template>

<script setup lang="ts">
import { ref, onBeforeMount, defineProps } from "vue";

const name = ref('BLEND 285');
const price = ref(299);
const formular = ref('Double Moving Average: DMA');
const images = ref('/images/blend285.png');


</script>

<style scoped></style>