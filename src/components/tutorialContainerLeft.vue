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
      <hoverButton backgroundColor="#3e3e3e" class="lol">
        <p>{{ buttonTextTutorial }}</p>
      </hoverButton>
    </div>
  </div>
</template>

<style scoped>
.tutorial-container {
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
  background: var(--surface-surface-blur, rgba(41, 41, 41, 0.5));
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  margin-bottom: 5vh;
}

.tutorial-container-img,
.tutorial-container-section {
  margin: 18px 10% 18px 18px;
  width: 50%;
}

.tutorial-container-img {
  width: 40%;
  /* background-image: url("@/assets/img/card-img-test.webp"); */
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  border-radius: 8px;
}

.tutorial-container-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 0 10px 0;
}

.tutorial-container-text {
  display: flex;
  flex-direction: column;
}

.tutorial-container-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
}

.tutorial-container-title h3 {
  margin-left: 2vw;
  margin-bottom: 25px;
}

.svg-container {
  /* background-color: red; */
  width: 12%;
  aspect-ratio: 1/1;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-flex;
  align-items: center;
}
</style>
