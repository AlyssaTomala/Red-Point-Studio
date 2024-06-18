<script>
export default {
  name: "ColorBox",
  props: {
    backgroundColor: {
      type: String,
      default: "white",
    },
  },
};
</script>
<template>
  <div :style="{ backgroundColor: backgroundColor }" class="color-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.color-box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>
