<script>
import hoverButton from "@/components/hoverButton.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    hoverButton,
  },
  props: {
    doubleParagraphTitleLeft: {
      type: String,
      required: true,
      default: "Default",
    },
    doubleParagraphTextLeft: {
      type: String,
      required: true,
      default: "Default",
    },
    doubleParagraphTitleRight: {
      type: String,
      required: true,
      default: "Default",
    },
    doubleParagraphTextRight: {
      type: String,
      required: true,
      default: "Default",
    },
    buttonTextLeft: {
      type: String,
      required: true,
      default: "D2efault",
    },
    buttonTextRight: {
      type: String,
      required: true,
      default: "D2efault",
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.doubleParagraphAnimation();
  },

  methods: {
    doubleParagraphAnimation() {
      gsap.from(".double-paragraph-text", {
        scrollTrigger: {
          trigger: ".double-paragraph-text",
          start: "-5% 100%",
          end: "-5% 50%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.5,
        duration: 2,
        ease: "power3.out",
      });
    },
  },
};
</script>
<template>
  <div class="double-paragraph-container">
    <div class="double-paragraph-text left-container">
      <div class="left-text-container">
        <h3>{{ doubleParagraphTitleLeft }}</h3>
        <p>{{ doubleParagraphTextLeft }}</p>
      </div>

      <div>
        <hoverButton>
          <p>{{ buttonTextLeft }}</p>
        </hoverButton>
      </div>
    </div>
    <div class="double-paragraph-text right-container">
      <div class="right-text-container">
        <h3>{{ doubleParagraphTitleRight }}</h3>
        <p>{{ doubleParagraphTextRight }}</p>
      </div>

      <div>
        <hoverButton>
          <p>{{ buttonTextRight }}</p>
        </hoverButton>
      </div>
    </div>
  </div>
</template>

<style>
.double-paragraph-container {
  display: flex;
  justify-content: space-between;
}

.left-container,
.right-container {
  width: 50%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
}

.left-text-container,
.right-text-container {
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
