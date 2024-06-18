<script></script>
<template>
  <div class="gradient-background gradient-background-left"></div>
  <div class="gradient-background gradient-background-right"></div>
  <div class="gradient-background gradient-background-right-coop"></div>
  <div class="gradient-background gradient-background-left-monitoring"></div>
</template>

<style scoped>
.gradient-background {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10;
}
.gradient-background-left {
  background-image: url("@/assets/img/img-background-gradient-left.webp");
  left: -50vw;
  top: 100vh;
}

.gradient-background-right {
  background-image: url("@/assets/img/img-background-gradient-right.webp");
  right: -50vw;
  top: 100vh;
  width: 100%;
  height: 100%;
}

.gradient-background-right-coop {
  background-image: url("@/assets/img/img-background-gradient-right-coop.webp");
  height: 220%;
  width: 100%;
  top: 170vh;
  right: -8vw;
}

.gradient-background-left-monitoring {
  background-image: url("@/assets/img/img-background-gradient-left-monitoring.webp");
  height: 300%;
  width: 100%;
  top: 400vh;
  left: -6vw;
}
</style>
