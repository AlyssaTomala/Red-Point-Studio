<script>
import hoverButton from "@/components/hoverButton.vue";

export default {
  components: {
    hoverButton,
  },
  props: {
    paragraphTextImgTitle: {
      type: String,
      required: true,
      default: "Default",
    },
    paragraphTextImg: {
      type: String,
      required: true,
      default: "Default",
    },
    buttonTextImg: {
      type: String,
      required: false,
      default: "lol",
    },
    paragraphTextImgImage: {
      type: String,
      required: false,
      default: "",
    },
    paragraphTextImgMap: {
      type: Boolean,
      required: false,
      default: false,
    },
    paragraphTextImgMapUrl: {
      type: String,
      required: false,
      default: "",
    },
    hoverButtonA: {
      type: String,
      default: "https://www.cff.ch/",
    },
    imageBoxShadow: {
      type: String,
      required: false,
      default: "0px 4px 15px 0px rgba(0, 0, 0, 0.5)",
    },
  },
  mounted() {},

  methods: {},
};
</script>

<template>
  <div class="paragraph-text-img-container">
    <div class="paragraph-text-img-content left-container">
      <div class="textimg-left-text-container">
        <h3>{{ paragraphTextImgTitle }}</h3>
        <p :style="{ whiteSpace: 'pre-line' }">{{ paragraphTextImg }}</p>
      </div>
      <div v-if="buttonTextImg">
        <hoverButton :hoverButtonA="hoverButtonA">
          <p>{{ buttonTextImg }}</p>
        </hoverButton>
      </div>
    </div>
    <div class="paragraph-text-img-content right-container">
      <div
        v-if="paragraphTextImgImage"
        class="textimg-right-img-container"
        :style="{ boxShadow: imageBoxShadow }"
      >
        <img :src="paragraphTextImgImage" />
      </div>
      <div
        v-else-if="paragraphTextImgMap"
        class="textimg-right-img-container"
        :style="{ boxShadow: imageBoxShadow }"
      >
        <iframe
          :src="paragraphTextImgMapUrl"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.paragraph-text-img-container {
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15vh;
}

.paragraph-text-img-content {
  width: 50%;
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
}

.textimg-right-img-container img,
.textimg-right-img-container iframe {
  object-fit: cover;
  object-position: right center;
  width: 100%;
  height: 100%;
}

h3 {
  padding-top: 0;
}

p {
  line-height: 24px;
}
</style>
