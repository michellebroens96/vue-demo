<template>
  <section class="flex justify-center align-center">
    <div class="py-6 container px-6">
      <div class="mx-auto h-full" :class="[width.length && width]">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Section = {
  width?: `w-${string}`;
};

withDefaults(defineProps<Section>(), {
  width: "w-10/12",
});
</script>
