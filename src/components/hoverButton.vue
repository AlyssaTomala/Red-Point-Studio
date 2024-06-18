<script>
export default {
  name: "buttonColor",
  props: {
    backgroundColor: {
      type: String,
      default: "#2a2a2a",
    },
  },
};
</script>
<template>
  <button class="hover-button">
    <div
      :style="{ backgroundColor: backgroundColor }"
      class="hover-button-border"
    >
      <slot></slot>
    </div>
  </button>
</template>

<style>
.hover-button {
  margin-top: 5vh;
  padding: 1.5px 1.5px;
  border-radius: 50px;
  background-color: rgba(255, 0, 0, 0);
  border: none;
}

.hover-button:hover {
  cursor: pointer;
  background: linear-gradient(30deg, rgba(25, 25, 25, 0) -3.1%, #e73a22 92.29%);
}

.hover-button-border {
  border-radius: 50px;
  padding: 14px 40px;
  box-shadow: 0px 0px 15.1px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
}

.hover-button-border:hover {
  background-color: #3e3e3e;
}

.all-tutorial-button-p {
  color: white;
  font-size: 22px;
  font-weight: 500;
}

@keyframes hoverButtonOpacityIn {
}
</style>
