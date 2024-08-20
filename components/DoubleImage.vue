<template>
  <Section width="w-12/12 md:w-10/12 lg:w-8/12">
    <div class="flex flex-row" :class="[image1.src && image2.src && 'gap-8']">
      <Image :image="image1" class="rounded-sm overflow-hidden" />
      <Image :image="image2" class="rounded-sm overflow-hidden" />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/layout/Section.vue";

import image1 from "~/assets/images/tent.jpg";
import image2 from "~/assets/images/sea.jpg";
</script>
