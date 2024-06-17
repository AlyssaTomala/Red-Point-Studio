<script>
export default {
  props: {},
};
</script>
<template>
  <button class="hover-button">
    <div class="hover-button-border">
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
  background: #2a2a2a;
  box-shadow: 0px 0px 15.1px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
}

.hover-button-border:hover {
}

@keyframes hoverButtonOpacityIn {
}
</style>
