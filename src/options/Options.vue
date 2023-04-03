<script setup lang="ts">
import Checkbox from '~/components/Checkbox.vue'
import { showed } from '~/logic/storage'
</script>

<template>
  <main class="flex flex-col gap-6 px-4 py-10 dark:bg-gray-800">
    <div class="flex items-center gap-4">
      <img
        src="/assets/logo.png"
        class="icon-btn h-20 w-20"
        alt="extension icon"
      >
      <h1 class="text-4xl">
        Options
      </h1>
    </div>

    <ul>
      <li>
        <Checkbox v-model="showed">
          Show the buttons on the pages (requires pages reload)
        </Checkbox>
      </li>
    </ul>
  </main>
</template>
