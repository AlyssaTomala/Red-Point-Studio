<template>
  <div class="tutorial-navigation-container" :style="navigationStyle">
    <div class="tutorial-navigation-title-content-container">
      <div
        class="tutorial-navigation-arrow-container tutorial-navigation-arrow-left"
        v-if="prevPageUrl"
      >
        <router-link :to="prevPageUrl">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_426_1487)">
              <path
                d="M11.1659 0C4.99882 0 0 4.99882 0 11.1659C0 17.3329 4.99882 22.3317 11.1659 22.3317C17.3329 22.3317 22.3317 17.3329 22.3317 11.1659C22.3317 4.99882 17.3329 0 11.1659 0ZM12.6388 14.4244C13.1644 14.9571 13.1674 15.5866 12.6469 16.1526L12.6418 16.1576L12.6368 16.1627C12.3866 16.4149 12.1021 16.543 11.7903 16.543C11.4554 16.543 11.1477 16.4119 10.9016 16.1627L6.85711 12.0789L6.84601 12.0678L6.83592 12.0557C6.35571 11.4897 6.37891 10.8632 6.89948 10.3376L10.9873 6.21044C11.2658 5.92897 11.5613 5.78672 11.866 5.78672C12.1707 5.78672 12.4683 5.93301 12.7336 6.22153C13.2552 6.7885 13.2512 7.41903 12.7235 7.9517L9.51541 11.1901L12.6388 14.4234V14.4244Z"
                :fill="prevArrowColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_426_1487)">
                <rect width="22.3317" height="22.3317" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </router-link>
      </div>
      <h4>{{ tutorialNavigationTitle }}</h4>
      <div
        class="tutorial-navigation-arrow-container tutorial-navigation-arrow-right"
        v-if="nextPageUrl"
      >
        <router-link :to="nextPageUrl">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.667969 11.1659C0.667969 17.3329 5.66679 22.3317 11.8338 22.3317C18.0009 22.3317 22.9997 17.3329 22.9997 11.1659C22.9997 4.99882 18.0009 0 11.8338 0C5.66679 0 0.667969 4.99882 0.667969 11.1659ZM15.2347 12.0799L11.1902 16.1637C10.944 16.4129 10.6363 16.544 10.3014 16.544C9.98968 16.544 9.70518 16.4159 9.45499 16.1637L9.4449 16.1526C8.92434 15.5866 8.92737 14.9571 9.45297 14.4244L12.5764 11.1911L9.36823 7.95271C8.84061 7.42004 8.83657 6.78951 9.35814 6.22254C9.62347 5.93401 9.91502 5.78773 10.2257 5.78773C10.5365 5.78773 10.826 5.92998 11.1044 6.21145L15.1923 10.3386C15.7128 10.8642 15.7371 11.4907 15.2558 12.0567"
              :fill="nextArrowColor"
            />
          </svg>
        </router-link>
      </div>
    </div>

    <ul>
      <li v-for="(link, index) in links" :key="index">
        <p>
          <router-link :to="link.url" class="effect-underline">
            {{ link.text }}
          </router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tutorialNavigationTitle: {
      type: String,
      required: true,
      default: "Default",
    },
    links: {
      type: Array,
      required: true,
      default: () => [],
    },

    prevPageUrl: {
      type: [String, Object],
      required: true,
      default: "",
    },
    prevArrowColor: {
      type: String,
      required: false,
      default: "#FFFFF9",
    },
    nextPageUrl: {
      type: [String, Object],
      required: true,
      default: "",
    },
    nextArrowColor: {
      type: String,
      required: false,
      default: "#FFFFF9",
    },
  },
};
</script>

<script></script>

<style scoped>
.tutorial-navigation-container {
  width: 18%;
  height: auto;
  position: fixed;
  z-index: 10;
  top: 10vh;
  padding: 20px;
  border-radius: 10px;
  background: var(--surface-surface-blur, rgba(255, 247, 247, 0.08));
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30px);
}

.tutorial-navigation-title-content-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  align-items: center;
}

.tutorial-navigation-arrow-container {
  cursor: pointer;
  padding-bottom: 5px;
}
.tutorial-navigation-arrow-left {
  padding-right: 5px;
}

.tutorial-navigation-arrow-left:hover {
  scale: 1.1;
}
.tutorial-navigation-arrow-right:hover {
  scale: 1.1;
}
ul {
  list-style-type: none;
  padding-left: 2vw;
}

li {
  margin: 2vh 0;
}

h4 {
  padding-bottom: 1vh;
}

p a,
p router-link {
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 20px;
  padding: 2px 0;
}

a.effect-underline:after {
  content: "";
  position: absolute;
  left: 0;
  display: inline-block;
  height: 0.7em;
  width: 100%;
  border-bottom: 1.5px solid;
  margin-top: 8px;
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
