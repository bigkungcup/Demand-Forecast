<template>
        <v-card class="tw-py-5 tw-bg-black">
            <v-card-title class="tw-text-4xl tw-font-extrabold tw-grid tw-grid-cols-3 tw-items-center tw-justify-center tw-space-x-5 tw-text-white">
                <div class="justify-items-start">
                    <NuxtLink to="/">
                        <v-icon class="tw-text-white">mdi-arrow-left-thick</v-icon>
                    </NuxtLink>
                </div>
                <div class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-x-5">
                    <img src="/images/box.png" alt="box" class="tw-w-12"/>
                    <div>
                        FORECASTING
                    </div>
                    <v-icon class="tw-text-white">mdi-magnify</v-icon>
                    <v-icon class="tw-text-white">mdi-reload</v-icon>
                </div>
            </v-card-title>
        </v-card>
 
        <slot />
</template>

<script setup lang="ts">


</script>

<style scoped>
</style>