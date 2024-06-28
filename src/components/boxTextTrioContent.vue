<template>
  <div class="paragraph-three-text-content">
    <div class="paragraph-three-text-title">
      <h4><slot name="title"></slot></h4>
      <p><slot name="firstText"></slot></p>
      <p><slot name="secondText"></slot></p>
    </div>
    <div class="paragraph-three-text-contact">
      <p><slot name="phoneNumber"></slot></p>
      <a target="_blank" :href="contactLink"><slot name="contact"></slot></a>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "ParagraphThreeTextContent",
  props: {
    contactLink: {
      type: String,
      required: true,
      default: "https://www.cff.ch/",
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.paragraphThreeTextContentAnimation();
  },

  methods: {
    paragraphThreeTextContentAnimation() {
      gsap.from(this.$el, {
        scrollTrigger: {
          trigger: ".paragraph-three-text-container",
          start: "center bottom",
          end: "center center",
        },
        duration: 1,
        rotate: 1,
        opacity: 0,
        y: 60,
        stagger: 0.5,
        ease: "power3.out",
      });
    },
  },
};
</script>

<style scoped>
.paragraph-three-text-content {
  height: 100%;
  aspect-ratio: 2/1;
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: pink; */
}

a {
  text-decoration: underline;
}

.paragraph-three-text-title {
  /* background-color: green; */
  height: 50%;
}
</style>
