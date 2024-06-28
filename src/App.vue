<script>
export default {
  components: {},
};
</script>

<template>
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
  color: #fff;
  font-family: "Qanelas";
}

.bold-large {
  font-weight: bold;
  font-size: 1.15em;
}

.tutorial-content-container {
  width: 75%;
  height: auto;
  position: relative;
  left: 25%;
}

.step-container {
  height: auto;
  margin: 2vh 2vw 8vh 2vw;
  padding: 2vh;
  border-radius: 15px;
  background: rgba(255, 247, 247, 0.08);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30px);
}

.specific-step-container {
  height: auto;
  padding: 2vh;
  margin-bottom: 5vh;
  border-radius: 10px;
  background: rgba(255, 247, 247, 0.08);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(30px);
}

.specific-step-container h3 {
  font-size: 24px;
}
.text-warning {
  color: #ff4930;
  padding: 2vh 0;
}

.no-margin {
  margin: 0;
}

.paragraph-padding {
  padding: 4vh 1vh;
}

.img-container {
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.5);
}
.img-container img {
  object-fit: cover;
  object-position: right center;
  width: 100%;
  height: 100%;
}
.inner-step-container {
  margin-bottom: 5vh;
}

.paragraph-text-img-container {
  margin: 0;
}
.title-step-container {
  padding: 2vh 0;
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
