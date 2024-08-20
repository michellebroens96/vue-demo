<template>
  <div
    class="flex items-center justify-between p-5 bg-gray-800 text-white rounded-b-lg"
  >
    <div class="flex items-center space-x-3">
      <!-- Logo -->
      <!-- <img src="@/assets/logo.png" alt="Logo" class="h-10" /> -->
      <!-- Title -->
      <h1 class="text-2xl font-semibold">My Website</h1>
    </div>
    <nav>
      <ul class="flex space-x-8">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Services</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
        <li><DarkModeToggle /></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
