<template>
  <Section id="undefined">
    <Typography
      variant="body"
      size="md"
      class="intro-text font-semibold"
      color="half"
    >
      <span
        v-for="(part, index) in splitText(text ?? '')"
        :key="index"
        :class="{ word: part.trim() !== '', space: part.trim() === '' }"
      >
        <template v-if="part.trim() === ''">&nbsp;</template>
        <template v-else>{{ part }}</template>
      </span>
    </Typography>
  </Section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Typography from "./partials/Typography.vue";
import Section from "~/components/layout/Section.vue";
import { gsap } from "~/plugins/gsap.client";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem metus, scelerisque quis augue at, fringilla efficitur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi non ligula nec turpis varius ultrices. Sed efficitur augue enim, ac condimentum tellus consequat eget. Nam suscipit nibh nec felis bibendum hendrerit. Duis varius volutpat augue, nec bibendum dui congue eu. Sed tempus libero lacus, sed viverra turpis mollis eu. Donec sed tellus at lectus commodo imperdiet. Vestibulum ut magna venenatis, bibendum dolor ac, interdum erat. Aliquam eget accumsan neque. Donec eleifend rutrum arcu sed dapibus. Suspendisse aliquet ullamcorper lorem at ornare. Maecenas mauris eros, aliquet vitae mauris non, congue sagittis turpis. In sed purus eu elit fermentum posuere. Phasellus ut tellus at enim accumsan ullamcorper ac eget arcu.";

const splitText = (text: string) => {
  return text.split(/(\s+)/);
};

const darkModeStore = useDarkModeStore();
console.log(darkModeStore.isDarkMode);
const isDarkMode = computed(() => darkModeStore.isDarkMode);

onMounted(() => {
  console.log(isDarkMode.value);
  const color = isDarkMode ? "white" : "black";
  const targetColor = isDarkMode ? "red" : "#7f1d1d";

  const parts = document.querySelectorAll(".word, .space");
  gsap.set(parts, { color });

  gsap.to(parts, {
    scrollTrigger: {
      trigger: ".intro-text",
      start: "top 80%",
      end: "bottom 50%",
      scrub: true,
    },
    color: targetColor,
    stagger: {
      each: 0.1,
      from: "start",
    },
    duration: 1,
  });
});
</script>

<style scoped>
.word {
  @apply inline-block;
}

.space {
  @apply inline-block;
}
</style>
