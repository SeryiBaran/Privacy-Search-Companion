<script setup lang="ts">
import { showed } from '~/logic/storage'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <div
    class="flex w-72 flex-col items-center gap-4 bg-gray-100 p-4 text-center dark:bg-gray-800"
  >
    <img src="/assets/logo.png" alt="Logo" class="h-32 w-32">
    <h1 class="m-0 text-xl">
      Privacy Search Companion
    </h1>
    <p>
      Press button to hide/show the buttons on the pages (requires pages reload)
    </p>

    <div class="flex items-center gap-2">
      <button class="btn" @click="showed = !showed">
        <template v-if="showed">
          Hide
        </template>
        <template v-else>
          Show
        </template>
      </button>

      <button
        class="h-6 w-6"
        title="Open settings" @click="openOptionsPage()"
      >
        <mdi-cog class="m-auto block text-lg" />
      </button>
    </div>

    <hr class="mt-2 w-full border-t-gray-600 dark:border-t-gray-600">
    <p class="m-0 text-sm">
      f5ociety x <a href="https://seryibaran.github.io">SeryiBaran</a>
    </p>
    <p class="m-0 text-sm">
      <a href="https://erghel.github.io/Privacy-Search-Companion">Official website</a>
      / <a href="https://github.com/Erghel/Privacy-Search-Companion">Github</a>
    </p>
  </div>
</template>
