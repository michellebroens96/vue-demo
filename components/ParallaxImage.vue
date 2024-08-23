<template>
  <Section width="w-9/12">
    <img
      ref="parallaxImage"
      class="aspect-square rounded-full object-cover w-full h-96"
      src="~/assets/images/code.jpg"
      sizes="100vw sm:50vw md:400px"
    />
  </Section>
</template>
<script setup lang="ts">
import Section from "./layout/Section.vue";
import { gsap } from "~/plugins/gsap.client";

const parallaxImage = ref(null);

onMounted(() => {
  if (parallaxImage.value) {
    gsap.to(parallaxImage.value, {
      y: 50,
      scrollTrigger: {
        trigger: parallaxImage.value,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }
});
</script>
