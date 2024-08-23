<template>
  <Section class="dark:bg-slate-700">
    <Typography variant="body" color="black">
      Hi, my name is Michelle. My passion is cosplay, where I create my own
      costumes and props. This hobby taught me a lot about creative thinking,
      designing patterns and then applying them. As a software engineer I also
      enjoy designing websites and games. Here I also like to implement the
      design I created. I am a full-stack developer with a focus on front-end
      development. I have experience with Vue.js, Nuxt.js, Tailwind CSS, and
      GSAP. I am also familiar with Node.js, and MySQL. I am always eager to
      learn new technologies and improve my skills.
    </Typography>
    <Typography variant="body" color="black" class="flex">
      My&nbsp;
      <span>
        <NuxtLink to="https://www.linkedin.com/in/michellebroens/">
          <Typography variant="body" color="accent"> LinkedIn</Typography>
        </NuxtLink>
      </span>
    </Typography>
  </Section>
</template>
<script setup lang="ts">
import Typography from "~/components/partials/Typography.vue";
import Section from "~/components/layout/Section.vue";
</script>
