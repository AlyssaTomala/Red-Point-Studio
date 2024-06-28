<template>
  <div class="paragraph-three-text-wrapper">
    <h3 class="paragraph-title">
      <slot name="header"></slot>
    </h3>
    <div class="paragraph-three-text-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParagraphThreeTextContainer",
};
</script>

<style scoped>
.paragraph-three-text-wrapper {
  width: 100%;
}

.paragraph-title {
  margin-bottom: 10px;
}

.paragraph-three-text-container {
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: left;
  justify-content: space-between;
}
</style>
