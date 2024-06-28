<template>
  <div>
    <!-- Prioritize router-link if both props are provided -->
    <router-link
      v-if="hoverButtonRouter"
      :to="hoverButtonRouter"
      class="hover-button"
    >
      <div
        :style="{ backgroundColor: backgroundColor }"
        class="hover-button-border"
      >
        <slot></slot>
      </div>
    </router-link>
    <!-- Render <a> tag only if hoverButtonRouter is not provided and hoverButtonA is available -->
    <a
      v-else-if="hoverButtonA"
      :href="hoverButtonA"
      target="_blank"
      rel="noopener noreferrer"
      class="hover-button"
    >
      <div
        :style="{ backgroundColor: backgroundColor }"
        class="hover-button-border"
      >
        <slot></slot>
      </div>
    </a>
    <!-- Optional: add a fallback or error handling if neither is provided -->
  </div>
</template>

<script>
export default {
  name: "HoverButton",
  props: {
    backgroundColor: {
      type: String,
      default: "#2a2a2a",
    },
    hoverButtonRouter: {
      type: [String, Object],
      default: null,
    },
    hoverButtonA: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.hover-button {
  display: inline-block;
  margin-top: 5vh;
  padding: 1.5px 1.5px;
  border-radius: 50px;
  background-color: rgba(255, 0, 0, 0);
  border: none;
  text-decoration: none;
}

.hover-button:hover {
  cursor: pointer;
  background: linear-gradient(30deg, rgba(25, 25, 25, 0) -3.1%, #e73a22 92.29%);
}

.hover-button-border {
  border-radius: 50px;
  padding: 14px 40px;
  box-shadow: 0px 0px 15.1px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
}

.hover-button-border:hover {
  background-color: #3e3e3e;
}

.all-tutorial-button-p {
  color: white;
  font-size: 22px;
  font-weight: 500;
}

/* @keyframes not in use can be removed unless needed for future animation */
</style>
