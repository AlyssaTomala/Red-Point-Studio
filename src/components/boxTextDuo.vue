<script>
import hoverButton from "@/components/hoverButton.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    hoverButton,
  },
  props: {
    boxTextDuoLeft: {
      type: String,
      required: true,
      default: "Default",
    },
    boxTextDuoRight: {
      type: String,
      required: true,
      default: "Default",
    },
    boxTextDuoTitleLeft: {
      type: String,
      required: true,
      default: "Default",
    },
    boxTextDuoTitleRight: {
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
      default: "",
    },

    hoverButtonRouterLeft: {
      type: String,
      required: true,
      default: "",
    },
    hoverButtonRouterRight: {
      type: String,
      required: true,
      default: "",
    },
    hoverButtonALeft: {
      type: String,
      required: true,
      default: "",
    },
    hoverButtonARight: {
      type: String,
      required: true,
      default: "",
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
        <h3>{{ boxTextDuoTitleLeft }}</h3>
        <p :style="{ whiteSpace: 'pre-line' }">{{ boxTextDuoLeft }}</p>
      </div>

      <div class="box-duo-button">
        <hoverButton
          :hoverButtonRouter="hoverButtonRouterLeft"
          :hoverButtonA="hoverButtonALeft"
        >
          <p>{{ buttonTextLeft }}</p>
        </hoverButton>
      </div>
    </div>
    <div class="double-paragraph-text right-container">
      <div class="right-text-container">
        <h3>{{ boxTextDuoTitleRight }}</h3>
        <p>{{ boxTextDuoRight }}</p>
      </div>

      <div class="box-duo-button">
        <hoverButton
          :hoverButtonRouter="hoverButtonRouterRight"
          :hoverButtonA="hoverButtonARight"
        >
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

p {
  padding-top: 4px;
  white-space: pre-line;
}

.box-duo-button {
  margin-top: 4vh;
}
</style>
