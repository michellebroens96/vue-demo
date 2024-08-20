import { defineNuxtPlugin } from "#app";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap };

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("gsap", gsap);
});
