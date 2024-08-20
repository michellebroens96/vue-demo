<template>
  <Section>
    <div
      :style="[
        imageExists
          ? { backgroundImage: `url(${imageSrc})` }
          : { backgroundColor: 'black' },
      ]"
      class="bg-cover bg-center h-9/12"
    >
      <div
        class="flex flex-col justify-center h-full items-center text-center gap-8"
      >
        <Typography size="lg" color="white" variant="heading">
          Michelle Broens website
        </Typography>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import imageSrc from "~/assets/images/laptop.jpg";
import Section from "~/components/layout/Section.vue";
import Typography from "./partials/Typography.vue";

const imageExists = ref(false);

onMounted(() => {
  const img = new Image();
  img.src = imageSrc;
  img.onload = () => {
    imageExists.value = true;
  };
  img.onerror = () => {
    imageExists.value = false;
  };
});
</script>
