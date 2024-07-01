<template>
  <h5>
    <router-link :to="navBarUrl" class="effect-underline">
      {{ navBarText }}</router-link
    >
  </h5>
</template>
<script>
export default {
  props: {
    navBarText: {
      type: String,
      required: true,
      default: "",
    },
    navBarUrl: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
<style>
h5 a {
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: #ffffff;
}
</style>
