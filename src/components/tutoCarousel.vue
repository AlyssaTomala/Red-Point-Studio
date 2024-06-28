<script>
export default {
  props: {
    backgroundInstallation: {
      type: String,
      required: false,
      default: "",
    },
    backgroundService: {
      type: String,
      required: false,
      default: "",
    },
    backgroundUse: {
      type: String,
      required: false,
      default: "",
    },
    backgroundSettings: {
      type: String,
      required: false,
      default: "",
    },
    backgroundExport: {
      type: String,
      required: false,
      default: "",
    },
    backgroundEnding: {
      type: String,
      required: false,
      default: "",
    },
    prevPageUrl: {
      type: [String, Object],
      required: true,
      default: "",
    },
    opacityPreviousPage: {
      type: String,
      required: false,
      default: "1",
    },
    nextPageUrl: {
      type: [String, Object],
      required: true,
      default: "",
    },
    opacityNextPage: {
      type: String,
      required: false,
      default: "1",
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="tutorial-carousel-container" id="tutorialCarousel">
    <router-link :to="prevPageUrl">
      <div
        :style="{ opacity: opacityPreviousPage }"
        class="tutorial-carousel-tutorial tutorial-carousel-previous-page"
      >
        <svg
          width="12"
          height="25"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.234375 6.16406L5.10938 11.0391C5.45313 11.3828 5.79687 11.3828 6.14062 11.0391C6.29688 10.8828 6.375 10.7031 6.375 10.5C6.375 10.2969 6.29688 10.1328 6.14062 10.0078L1.82812 5.64844L6.14062 1.28906C6.51563 0.945312 6.52344 0.601566 6.16406 0.257814C5.80469 -0.085938 5.45313 -0.085938 5.10938 0.257814L0.234375 5.13281C0.078124 5.25781 0 5.42969 0 5.64844C0 5.86719 0.078124 6.03906 0.234375 6.16406Z"
            fill="#FFFFF9"
          />
        </svg>
      </div>
    </router-link>
    <div class="tutorial-carousel-tutorial-number-container">
      <router-link to="/tutoInstallation">
        <div
          :style="{ background: backgroundInstallation }"
          class="tutorial-carousel-tutorial tutorial-carousel-tutorial-installation"
        >
          <p>1</p>
        </div>
      </router-link>
      <router-link to="/tutoService">
        <div
          :style="{ background: backgroundService }"
          class="tutorial-carousel-tutorial tutorial-carousel-tutorial-service"
        >
          <p>2</p>
        </div>
      </router-link>
      <router-link to="/tutoUse">
        <div
          :style="{ background: backgroundUse }"
          class="tutorial-carousel-tutorial tutorial-carousel-tutorial-use"
        >
          <p>3</p>
        </div>
      </router-link>
      <router-link to="/tutoSettings">
        <div
          :style="{ background: backgroundSettings }"
          class="tutorial-carousel-tutorial tutorial-carousel-tutorial-settings"
        >
          <p>4</p>
        </div>
      </router-link>
      <router-link to="/tutoExport">
        <div
          :style="{ background: backgroundExport }"
          class="tutorial-carousel-tutorial tutorial-carousel-tutorial-export"
        >
          <p>5</p>
        </div>
      </router-link>
      <router-link to="/tutoEnding">
        <div
          :style="{ background: backgroundEnding }"
          class="tutorial-carousel-tutorial tutorial-carousel-tutorial-ending"
        >
          <p>6</p>
        </div>
      </router-link>
    </div>
    <router-link :to="nextPageUrl">
      <div
        :style="{ opacity: opacityNextPage }"
        class="tutorial-carousel-tutorial tutorial-carousel-next-page"
      >
        <svg
          width="12"
          height="25"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_447_3410)">
            <path
              d="M0.287235 10.0078C-0.0877661 10.3516 -0.0955791 10.6953 0.263798 11.0391C0.623175 11.3828 0.974734 11.3828 1.31848 11.0391L6.19348 6.16406C6.34974 6.03906 6.42786 5.86719 6.42786 5.64844C6.42786 5.42969 6.34974 5.25781 6.19348 5.13281L1.31848 0.257814C0.974734 -0.085938 0.623175 -0.085938 0.263798 0.257814C-0.0955791 0.601566 -0.0877661 0.945312 0.287235 1.28906L4.59973 5.64844L0.287235 10.0078Z"
              fill="#E7E6E0"
            />
          </g>
          <defs>
            <clipPath id="clip0_447_3410">
              <rect width="6.1875" height="10.875" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.tutorial-carousel-container {
  margin: 10vh 0 5vh 0vw;
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2vh;
  border-radius: 500px;
  background-color: rgba(70, 70, 70, 0.25);
  box-shadow: 0px 0px 15.1px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.tutorial-carousel-tutorial-number-container {
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tutorial-carousel-tutorial {
  height: 6vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  border-radius: 500px;
  background-color: rgba(89, 89, 89, 0.5);
  box-shadow: 0px 0px 15.1px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2px);
  cursor: pointer;
  z-index: 1;
}

.tutorial-carousel-tutorial:hover,
.tutorial-carousel-tutorial-use:hover {
  background-color: rgba(124, 124, 124, 0.5);
}

.tutorial-carousel-tutorial p {
  font-size: 22px;
}

.tutorial-carousel-previous-page {
  padding: 1px 5px 0 0;
}
.tutorial-carousel-next-page {
  padding: 1px 0 0 5px;
}
</style>
