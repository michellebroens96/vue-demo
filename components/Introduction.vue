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
import { onMounted, computed, watch } from "vue";
import Typography from "./partials/Typography.vue";
import Section from "~/components/layout/Section.vue";
import { gsap } from "~/plugins/gsap.client";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare tempus mauris, id ultricies nulla lacinia in. Nulla facilisi. Quisque efficitur accumsan ipsum, vel sodales mauris iaculis id. Phasellus at hendrerit elit. Quisque convallis ante magna, eu posuere nisl convallis ac. Suspendisse accumsan faucibus arcu, luctus porta sem cursus eget. Pellentesque maximus gravida finibus. Nulla dictum ullamcorper felis sit amet lobortis. Vestibulum non nibh ut augue porta ornare."; // truncated for brevity

const splitText = (text: string) => {
  return text.split(/(\s+)/);
};

const darkModeStore = useDarkModeStore();
const isDarkMode = computed(() => darkModeStore.isDarkMode);

const updateColors = () => {
  const color = isDarkMode.value ? "white" : "black";
  const targetColor = isDarkMode.value ? "red" : "brown";

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
};

onMounted(() => {
  updateColors();
});

watch(isDarkMode, () => {
  updateColors();
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
