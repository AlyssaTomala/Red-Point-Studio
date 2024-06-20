<script>
import navigationBar from "@/components/navigationBar.vue";

export default {
  components: {
    navigationBar,
  },
};
</script>

<template>
  <navigationBar />
  <router-view :key="$route.fullPath"></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-color: #191919;
  scroll-behavior: smooth;
  margin: 0 5%;
}

body {
  overflow-x: hidden;
}

h1,
h2,
h3,
h4 {
  font-family: "Gilroy";
  font-weight: 900;
  color: #fff;
}

h1 {
  font-size: 60px;
}

h2 {
  font-size: 48px;
}

h3 {
  font-size: 36px;
  padding: 60px 0 32px 0;
}

h4 {
  font-size: 24px;
}

p,
h5 {
  font-family: "Qanelas";
  font-weight: 400;
  color: #fff;
  font-size: 18px;
}

h5 {
  font-size: 20px;
  font-weight: 500;
}

a {
  text-decoration: none;
}
</style>

<style scoped>
* {
  font-family: "Fafo";
  overflow-x: hidden;
}

@font-face {
  font-family: "Qanelas";
  font-weight: 400;
  font-style: normal;
  src: url("../src/assets/fonts/QanelasRegular.woff2") format("woff2");
}

@font-face {
  font-family: "Qanelas";
  font-weight: 500;
  font-style: normal;
  src: url("../src/assets/fonts/QanelasMedium.woff2") format("woff2");
}

@font-face {
  font-family: "Gilroy";
  font-weight: 900;
  font-style: normal;
  src: url("../src/assets/fonts/Gilroy-ExtraBold.woff2") format("woff2");
}
</style>
