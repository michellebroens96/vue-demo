<template>
  <Section width="w-12/12 md:w-10/12 lg:w-8/12">
    <div class="flex flex-row" :class="[image1 && image2 && 'gap-8']">
      <img :src="image1" class="rounded-lg overflow-hidden" />
      <img :src="image2" class="rounded-lg overflow-hidden" />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/layout/Section.vue";
import image1 from "~/assets/images/tent.jpg";
import image2 from "~/assets/images/sea.jpg";
</script>
