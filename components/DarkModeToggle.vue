<template>
  <div class="flex items-center gap-2">
    <Typography variant="body" color="white">Dark mode</Typography>
    <FwbToggle v-model="isDarkMode" @update:model-value="toggleDarkMode" />
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from "~/stores/darkModeStore";
import { FwbToggle } from "flowbite-vue";
import Typography from "~/components/partials/Typography.vue";

const darkModeStore = useDarkModeStore();
const isDarkMode = darkModeStore.isDarkMode;

const toggleDarkMode = () => {
  darkModeStore.toggleDarkMode();
};

onMounted(() => {
  const htmlElement = document.documentElement;

  if (darkModeStore.isDarkMode) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  watch(
    () => darkModeStore.isDarkMode,
    (newVal) => {
      if (newVal) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  );
});
</script>
