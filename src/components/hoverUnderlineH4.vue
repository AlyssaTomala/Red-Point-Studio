<template>
  <h4>
    <router-link :to="navBarUrl" class="effect-underline">
      {{ navBarText }}</router-link
    >
  </h4>
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
h4 a {
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: #ffffff;
  font-family: "GilRoy";
}
</style>
