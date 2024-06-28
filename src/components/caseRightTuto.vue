<script>
import hoverButton from "@/components/hoverButton.vue";

export default {
  components: {
    hoverButton,
  },
  props: {
    textTutorial: {
      type: String,
      required: true,
      default: "Oui",
    },
    buttonTextTutorial: {
      type: String,
      required: true,
      default: "essai",
    },
    h3Tutorial: {
      type: String,
      required: true,
      default: "essai",
    },
    svgIcon: {
      type: String,
      default: "",
    },
    backgroundImageTutorial: {
      type: String,
      required: true,
    },
    iconTutorial: {
      type: String,
      required: true,
    },
    hoverButtonRouter: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <div class="tutorial-container">
    <div
      :style="{ backgroundImage: `url(${backgroundImageTutorial})` }"
      class="tutorial-container-img"
    ></div>
    <div class="tutorial-container-section">
      <div class="tutorial-container-text">
        <div class="tutorial-container-title">
          <div
            :style="{ backgroundImage: `url(${iconTutorial})` }"
            class="svg-container tutorial-title-icon"
          ></div>
          <h3>{{ h3Tutorial }}</h3>
        </div>
        <p>{{ textTutorial }}</p>
      </div>
      <hoverButton
        :hoverButtonRouter="hoverButtonRouter"
        backgroundColor="#3e3e3e"
        class="border-button"
      >
        <div class="tutorial-hover-color-button"></div>
        <p>{{ buttonTextTutorial }}</p>
      </hoverButton>
    </div>
  </div>
</template>

<style scoped>
.tutorial-container {
  flex-direction: row-reverse;
}

.tutorial-container-img,
.tutorial-container-section {
  margin: 18px 18px 18px 2%;
  width: 50%;
}
</style>
