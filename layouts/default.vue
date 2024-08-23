<template>
  <div class="relative h-screen lg:flex">
    <div class="relative w-full h-[calc(100vh-74px)] lg:h-screen flex flex-col">
      <Navbar />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
