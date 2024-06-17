<script>
export default {
  props: {
    longParagraphText: {
      type: String,
      required: true,
      default: "Default",
    },
  },
};
</script>
<template>
  <p class="paragrah-long">{{ longParagraphText }}</p>
</template>

<style>
.paragrah-long {
  width: 50%;
}
</style>
