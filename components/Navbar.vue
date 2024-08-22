<template>
  <div
    class="flex items-center justify-between p-5 bg-gray-800 text-white rounded-b-lg"
  >
    <div class="flex items-center space-x-3">
      <h1 class="text-2xl font-semibold">Michelle Broens's Demo</h1>
    </div>
    <nav>
      <ul class="flex space-x-8">
        <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
        <li>
          <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
        </li>
        <li><DarkModeToggle /></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import DarkModeToggle from "~/components/DarkModeToggle.vue";
</script>
