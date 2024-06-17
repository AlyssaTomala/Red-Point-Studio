<script>
export default {
  props: {
    cardsTitle: {
      type: String,
      required: true,
      default: "",
    },
    cardsList: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
<template>
  <p class="cards-title-hover">{{ cardsTitle }}</p>
  <p class="cards-list">{{ cardsList }}</p>
</template>

<style>
.cards-title-hover {
  font-size: 20px;
}
</style>
