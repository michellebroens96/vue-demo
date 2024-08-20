<template>
  <Section width="w-full">
    <img
      ref="parallaxImage"
      class="aspect-square object-cover w-full h-full"
      src="~/assets/images/laptop.jpg"
      sizes="100vw sm:50vw md:400px"
    />
  </Section>
</template>
<script setup lang="ts">
import Section from "./layout/Section.vue";
import { gsap } from "~/plugins/gsap.client";

const parallaxImage = ref(null);

onMounted(() => {
  const parts = document.querySelectorAll(".word, .space");
  gsap.set(parts, { color: "black" });

  gsap.to(parts, {
    scrollTrigger: {
      trigger: ".intro-text",
      start: "top 80%",
      end: "bottom 50%",
      scrub: true,
    },
    color: "grey",
    stagger: {
      each: 0.1,
      from: "start",
    },
    duration: 1,
  });
});
</script>
