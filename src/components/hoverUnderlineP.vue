<template>
  <p>
    <router-link :to="navBarUrl" class="effect-underline">
      {{ navBarText }}</router-link
    >
  </p>
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
      type: [String, Object],
      required: true,
      default: "",
    },
  },
};
</script>
<style>
p a,
p router-link {
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: #ffffff;
}

a.effect-underline:after {
  content: "";
  position: absolute;
  left: 0;
  display: inline-block;
  height: 0.7em;
  width: 100%;
  border-bottom: 1.5px solid;
  margin-top: 10px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}

a.effect-underline:hover:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
