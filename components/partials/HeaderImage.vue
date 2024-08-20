<template>
  <Section
    width="w-full"
    class="relative overflow-hidden inset-x-0"
    :class="[
      swooshBottom && 'mask-swoosh-bottom',
      height ? height : 'min-h-[60vh] lg:min-h-[80vh]',
    ]"
  >
    <div
      class="absolute inset-x-0 w-full h-full bg-cover bg-center"
      :style="[
        imageSrc
          ? { backgroundImage: `url(${imageSrc})` }
          : { backgroundColor: 'black' },
      ]"
    />
    <div class="relative h-full container mx-auto max-w-screen-xl">
      <slot />
    </div>
  </Section>
</template>
<script setup lang="ts">
import Section from "~/components/layout/Section.vue";
import { onMounted, ref } from "vue";

defineProps<{
  imageSrc?: string;
  swooshBottom?: boolean;
  height?: `h-${string}`;
}>();
</script>
<style scoped>
.mask-swoosh-bottom {
  mask-position: bottom center;
  mask-size: 100% auto;
  mask-repeat: no-repeat;
  mask-image: url("/assets/images/section-bottom-mask-sm.svg");

  @screen md {
    mask-image: url("/assets/images/section-bottom-mask-md.svg");
  }
  @screen lg {
    mask-image: url("/assets/images/section-bottom-mask-lg.svg");
  }
}
</style>
