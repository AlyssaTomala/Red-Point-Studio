<template>
  <div class="tutorial-introduction-container">
    <div class="tutorial-introduction-icon-container">
      <img :src="tutorialIntroductionIcon" />
    </div>
    <div class="tutorial-introduction-content-container">
      <h1>{{ tutorialIntroductionTitle }}</h1>
      <div class="tutorial-introduction-text-container">
        <p>{{ tutorialIntroductionText }}</p>
        <p class="text-warning" v-if="showTextWarning">
          {{ textWarning }}
        </p>
      </div>

      <div class="tutorial-introduction-links-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tutorialIntroductionTitle: {
      type: String,
      required: true,
      default: "Titre",
    },
    tutorialIntroductionText: {
      type: String,
      required: true,
      default: "Texte",
    },
    textWarning: {
      type: String,
      required: false,
      default: "",
    },
    showTextWarning: {
      type: Boolean,
      required: false,
      default: false,
    },
    tutorialIntroductionIcon: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.tutorial-introduction-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2vh 1.5vw 10vh;
  margin-top: 8vh;
}

.tutorial-introduction-icon-container {
  width: 16%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3vh;
}

.tutorial-introduction-icon-container img {
  width: 100%;
  height: auto;
}

.tutorial-introduction-text-container {
  width: 60%;
  padding-top: 2vh;
}

h2 {
  padding: 2vh 0;
}
</style>
