<template>
  <div class="relative h-screen lg:flex">
    <div
      class="relative w-full h-[calc(100vh-74px)] lg:h-screen flex flex-col bg-send-grey-bg"
    >
      <Navbar />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Introduction from "~/components/Introduction.vue";
</script>
