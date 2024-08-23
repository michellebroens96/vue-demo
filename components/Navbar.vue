<template>
  <div
    class="flex items-center justify-between p-5 bg-gray-800 dark:bg-gray-100 text-white rounded-b-lg z-10"
  >
    <div class="flex items-center space-x-3">
      <Typography variant="heading" color="white">
        Michelle Broens' Demo
      </Typography>
    </div>
    <nav>
      <ul class="flex space-x-8">
        <li>
          <NuxtLink to="/" class="hover:underline">
            <Typography variant="body" color="white">Home</Typography>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:underline">
            <Typography variant="body" color="white">Contact</Typography>
          </NuxtLink>
        </li>
        <li><DarkModeToggle /></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import DarkModeToggle from "~/components/DarkModeToggle.vue";
import Typography from "./partials/Typography.vue";
</script>
