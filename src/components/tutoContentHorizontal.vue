<template>
  <div class="paragraph-text-img-container">
    <div class="paragraph-text-img-content left-container">
      <div class="textimg-left-text-container">
        <h3 v-if="paragraphTextImgTitle">{{ paragraphTextImgTitle }}</h3>
        <p v-html="paragraphTextImg"></p>
        <div v-if="showTextBonus" class="paragraph-text-bonus-container">
          <div class="paragraph-text-bonus-star">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 15.2093L13.392 17.873C14.1816 18.3663 15.1686 17.6264 14.9219 16.7385L13.7868 11.7564L17.636 8.40218C18.3269 7.81026 17.9815 6.67573 17.0439 6.57707L11.9609 6.13313L9.98697 1.44704C9.59218 0.608474 8.40781 0.608474 8.01302 1.44704L6.03907 6.13313L0.956143 6.57707C0.0185154 6.6264 -0.326926 7.81026 0.363957 8.40218L4.21316 11.7564L3.07814 16.7385C2.8314 17.6264 3.81837 18.3663 4.60796 17.873L9 15.2093Z"
                fill="#FFFFF9"
              />
            </svg>
          </div>
          <p>{{ paragraphTextBonus }}</p>
        </div>
      </div>
    </div>
    <div class="paragraph-text-img-content right-container">
      <div v-if="paragraphTextImgImage" class="textimg-right-img-container">
        <img :src="paragraphTextImgImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    paragraphTextImgTitle: {
      type: String,
    },
    paragraphTextImg: {
      type: String,
      required: true,
      default: "Default",
    },
    paragraphTextBonus: {
      type: String,
      required: true,
      default: "Default",
    },
    paragraphTextImgImage: {
      type: String,
      required: false,
      default: "",
    },
    showTextBonus: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  mounted() {},

  methods: {},
};
</script>

<style scoped>
.paragraph-text-img-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2vh;
}

.paragraph-text-img-content {
  width: 48%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  margin: 2px;
}

.textimg-right-img-container {
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.5);
}

.textimg-right-img-container img {
  object-fit: cover;
  object-position: right center;
  width: 100%;
  height: 100%;
}

.paragraph-text-bonus-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2vh 1vh;
}

.paragraph-text-bonus-star {
  margin-right: 2vh;
  padding-top: 0.5vh;
}

h3 {
  padding-top: 0;
}

p {
  line-height: 24px;
  white-space: pre-line;
}
</style>
