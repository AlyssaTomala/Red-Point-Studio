<script>
export default {
  components: {},
  props: {
    paragraphImgRightTitle: {
      type: String,
      required: false,
    },
    paragraphTextBonus: {
      type: String,
      required: true,
      default: "Default",
    },
    showTextBonus: {
      type: Boolean,
      required: false,
      default: false,
    },
    rightImage: {
      type: String,
      required: true,
      default: "",
    },
  },
  mounted() {},

  methods: {},
};
</script>

<template>
  <div class="right-img-container">
    <div v-if="rightImage" class="right-img-content">
      <img :src="rightImage" />
    </div>
  </div>
</template>

<style scoped>
.right-img-container {
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  margin: 2px;
}

.right-img-content {
  width: 50%;
  height: 100%;
  padding-left: 2vh;
}

.right-img-container img {
  object-fit: cover;
  object-position: right center;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.5);
  height: 100%;
}
</style>
