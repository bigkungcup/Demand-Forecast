<template>
  <div class="tw-flex tw-justify-center tw-my-10">
    <div class="tw-text-7xl tw-flex tw-flex-row tw-items-center tw-space-x-5">
        <img src="/images/box.png" alt="box">
        <div>Item</div>
    </div>
  </div>

  <v-container class="tw-bg-black tw-my-10">
    <v-row align="center"
      justify="center">
      <v-col cols="12" sm="6">
        <NuxtLink to="/blend" class="tw-no-underline">
        <v-sheet class="ma-5 pa-4 tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-space-x-10"> 
            <img src="/images/blend.jpg" alt="blend" class="tw-w-[114px] tw-h-[114px]">
            <div>BLEND</div> 
        </v-sheet>
        </NuxtLink>

        <NuxtLink to="/hongthong"  class="tw-no-underline">
          <v-sheet class="ma-5 pa-4 tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-space-x-10"> 
            <img src="/images/hongthong.jpg" alt="hongthong" class="tw-w-[114px] tw-h-[114px]">
            <div>HONGTHONG</div> 
          </v-sheet>
        </NuxtLink>
        
        <NuxtLink to="/singha"  class="tw-no-underline">  
          <v-sheet class="ma-5 pa-4 tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-space-x-10"> 
            <img src="/images/singha.png" alt="singha" class="tw-w-[114px] tw-h-[114px]">
            <div>SINGHA</div> 
          </v-sheet>
        </NuxtLink>
        
        <NuxtLink to="/sangsom"  class="tw-no-underline">
          <v-sheet class="ma-5 pa-4 tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-space-x-10"> 
            <img src="/images/sangsom.png" alt="sangsom" class="tw-w-[114px] tw-h-[114px]">
            <div>SANGSOM</div> 
          </v-sheet>
        </NuxtLink>

      </v-col>

      <v-col cols="12" sm="6">
        <NuxtLink to="/my"  class="tw-no-underline">
        <v-sheet class="ma-5 pa-4 tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-space-x-10"> 
            <img src="/images/mybeer.png" alt="mybeer" class="tw-w-[114px] tw-h-[114px]">
            <div>MY</div> 
        </v-sheet>
        </NuxtLink>

        <NuxtLink to="/chang"  class="tw-no-underline">
        <v-sheet class="ma-5 pa-4 tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-space-x-10"> 
            <img src="/images/chang.png" alt="chang" class="tw-w-[114px] tw-h-[114px]">
            <div>CHANG</div> 
        </v-sheet>
        </NuxtLink>

        <NuxtLink to="/regency"  class="tw-no-underline">
        <v-sheet class="ma-5 pa-4 tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-space-x-10"> 
            <img src="/images/regency.jpg" alt="regency" class="tw-w-[114px] tw-h-[114px]">
            <div>REGENCY</div> 
        </v-sheet>
        </NuxtLink>

        <NuxtLink to="/leo"  class="tw-no-underline">
        <v-sheet class="ma-5 pa-4 tw-text-4xl tw-font-extrabold tw-flex tw-flex-row tw-items-center tw-space-x-10"> 
            <img src="/images/leo.jpg" alt="leo" class="tw-w-[114px] tw-h-[114px]">
            <div>LEO</div> 
        </v-sheet>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<style scoped>

</style>
