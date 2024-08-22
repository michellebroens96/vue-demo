import { defineStore } from "pinia";
import { ref } from "vue";

function isLocalStorageAvailable() {
  try {
    const test = "__storage_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

export const useDarkModeStore = defineStore("darkMode", () => {
  const isDarkMode = ref(false);

  if (isLocalStorageAvailable()) {
    isDarkMode.value = localStorage.getItem("isDarkMode") === "true";
  }

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;

    if (isLocalStorageAvailable()) {
      localStorage.setItem("isDarkMode", isDarkMode.value.toString());
    }
  };

  return { isDarkMode, toggleDarkMode };
});
