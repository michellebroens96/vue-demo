<template>
  <div class="flex items-center gap-2">
    <label for="darkModeSlider" class="text-gray-700 dark:text-gray-300"
      >Dark Mode</label
    >
    <input
      id="darkModeSlider"
      type="checkbox"
      v-model="isDarkMode"
      @change="toggleDarkMode"
      class="appearance-none w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-pointer transition-colors duration-300"
    />
    <span
      class="absolute top-1 left-1 w-4 h-4 bg-white dark:bg-gray-800 rounded-full transform transition-transform duration-300"
      :class="{ 'translate-x-5': isDarkMode }"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from "~/stores/darkModeStore";
import { computed } from "vue";

const darkModeStore = useDarkModeStore();
const isDarkMode = computed({
  get: () => darkModeStore.isDarkMode,
  set: () => darkModeStore.toggleDarkMode(),
});

const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
};
</script>
