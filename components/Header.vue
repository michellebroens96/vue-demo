<template>
  <HeaderImage
    :image-src="imageSrc"
    width="w-12/12 md:w-8/12"
    swoosh-bottom
    class="mt-[-3rem]"
  >
    <div
      class="flex flex-col justify-center h-full items-center text-center gap-8"
    >
      <Typography size="lg" color="white" variant="heading">
        Michelle Broens website
      </Typography>
    </div>
  </HeaderImage>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import imageSrc from "~/assets/images/laptop.jpg";
import Typography from "./partials/Typography.vue";
import HeaderImage from "./partials/HeaderImage.vue";

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
