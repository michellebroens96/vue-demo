<template>
  <component :is="tag" :class="computedClasses">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

//eslint-disable-next-line
type ValidTag = keyof HTMLElementTagNameMap;

type Sizes = "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
type Variant = "heading" | "body" | "short-heading" | "richtext";
type Color = "primary" | "half" | "accent" | "black" | "white";

interface Props {
  as?: ValidTag;
  variant?: Variant;
  size?: Sizes;
  color?: Color;
}

const props = withDefaults(defineProps<Props>(), {
  as: undefined,
  variant: "body",
  size: "md",
  color: "black",
});

const sizes = {
  heading: {
    xxl: "text-[40px] md:text-[80px] lg:text-[110px] leading-none",
    xl: "text-[32px] md:text-[72px] lg:text-[80px]",
    lg: "text-[32px] md:text-[48px] lg:text-[72px] leading-tight",
    md: "text-[24px] md:text-[36px] lg:text-[48px] leading-tight font-semibold",
    sm: "text-[24px] md:text-[32px] lg:text-[36px] leading-tight",
    xs: "text-[24px] md:text-[24px] lg:text-[32px]",
    xxs: "text-[16px]",
  },
  body: {
    xxl: "text-[20px] md:text-[24px]",
    xl: "text-[20px] md:text-[24px]",
    lg: "text-[18px] md:text-[20px]",
    md: "text-[16px] md:text-[18px] leading-relaxed",
    sm: "text-[16px]",
    xs: "text-[16px]",
    xxs: "text-[16px]",
  },
};

const colors = {
  primary: "text-slate-800 dark:text-slate-300",
  half: "text-slate-500 dark:text-slate-100",
  accent: "text-blue-500 dark:text-blue-300",
  black: "text-black dark:text-white",
  white: "text-white dark:text-slate-500",
};

const tag = computed(() => props.as || "p");

const computedClasses = computed(() => {
  if (props.variant === "short-heading") {
    return `${sizes.body.sm} ${
      colors[props.color]
    } font-semibold uppercase`.trim();
  }
  if (props.variant === "richtext") {
    return `${sizes.body.md} richtext`.trim();
  }
  return `${sizes[props.variant][props.size]} ${colors[props.color]}`.trim();
});
</script>

<style>
.richtext {
  ul {
    @apply list-disc;
  }
  ol {
    @apply list-decimal;
  }

  ul,
  ol {
    @apply my-4;

    li {
      @apply ml-6;
    }
  }

  a {
    @apply underline text-slate-800;

    &:hover {
      @apply no-underline;
    }
  }
}
</style>
