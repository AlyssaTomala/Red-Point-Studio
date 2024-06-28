<script>
export default {
  props: {
    boxTextOnlyContent: {
      type: String,
      required: true,
      default: "Default",
    },
  },
};
</script>
<template>
  <p class="text-only">{{ boxTextOnlyContent }}</p>
</template>

<style>
.text-only {
  width: 50%;
}
</style>
