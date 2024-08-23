<template>
  <NuxtLayout>
    <div class="m-8 dark:bg-slate-700">
      <h1 class="text-5xl font-bold text-center text-gray-600">
        {{ error.message }}
      </h1>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useError } from "#app";

const error = useError();
</script>
