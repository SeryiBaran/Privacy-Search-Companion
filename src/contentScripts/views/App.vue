<script setup lang="ts">
import { ref } from 'vue'
import { searchesFromByHosts, searchesTo } from '../../../searches'
import { showed } from '~/logic/storage'

const search = searchesFromByHosts[window.location.host]

const input = document.querySelector(
  search?.selector,
) as HTMLInputElement | null

const searchTextValue = ref()

if (input != null)
  searchTextValue.value = input.value
</script>

<template>
  <div
    v-if="searchTextValue"
    class="z-100 leading-1em fixed bottom-0 right-[10%] m-5 flex select-none items-end gap-4 text-center font-sans text-[16px]"
  >
    <div
      v-if="showed"
      class="flex h-min w-max flex-col gap-1 rounded-lg text-gray-800 shadow"
    >
      <a
        v-for="searchTo in searchesTo"
        :key="searchTo.id"
        :href="searchTo.searchUrl + searchTextValue"
        class="btn px-[0.75em] py-[0.5em]"
        target="_blank"
      >{{ searchTo.shortName }}</a>
    </div>
    <div
      class="btn flex h-10 w-10 cursor-pointer rounded-full p-1 shadow"
      @click="showed = !showed"
    >
      <mdi-eye v-if="showed" class="m-auto block text-lg" />
      <mdi-eye-off v-else class="m-auto block text-lg" />
    </div>
  </div>
</template>
