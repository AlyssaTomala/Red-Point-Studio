<template>
  <div
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    class="tutorial-container-img"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  name: "TutorialImageContainer",
  props: {
    backgroundImage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.tutorial-container-img {
  width: 40%;
  height: 200px;
  /* background-image: url("@/assets/img/card-img-test.webp"); */
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  border-radius: 8px;
}
</style>
