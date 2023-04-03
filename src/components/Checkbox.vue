<script lang="ts" setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <!-- https://flowbite.com/docs/components/forms/#toggle-switch -->
  <label class="relative inline-flex items-center mb-4 cursor-pointer">
    <input
      :checked="modelValue"
      type="checkbox"
      class="sr-only peer"
      @input="$event => {
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      }
      "
    >
    <div
      class="w-11 h-6 bg-gray-400 rounded-full peer focus-visible:(ring-4 ring-blue-300) dark:focus-visible:ring-blue-500 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"
    />
    <span class="ml-3"><slot /></span>
  </label>
</template>
