<script>
import navigationBar from "@/components/navigationBar.vue";
import cardsMaterial from "@/components/cardsMaterial.vue";

export default {
  components: {
    navigationBar,
    cardsMaterial,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <navigationBar />
  <div class="slay"></div>
  <div class="material-container">
    <h3>Matériel</h3>
    <cardsMaterial />
  </div>
  <div class="slay"></div>
</template>

<style scoped>
.slay {
  height: 100vh;
  background-color: #191919;
}
</style>
