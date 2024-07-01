<script>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default {
  mounted() {
    this.animateHeaderP();
    this.redPointAnimaiton();
  },
  methods: {
    redPointAnimaiton() {
      gsap.from(".header-container svg", {
        duration: 1,
        scale: 0,
        opacity: 0,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    animateHeaderP() {
      const splitText = new SplitText(".header-h1-container p", {
        type: "chars",
      });

      gsap.from(splitText.chars, {
        duration: 0.2,
        opacity: 0,
        y: 8,
        ease: "power3.out",
        stagger: 0.04,
      });
    },
  },
};
</script>

<template>
  <div class="header-container">
    <div class="header-background-container">
      <svg
        width="104"
        height="97"
        viewBox="0 0 104 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_199_1261)">
          <path
            d="M0.620227 44.4978C0.722791 20.0591 20.6884 0.338808 45.2694 0.405657C70.0099 0.472505 89.8502 20.3711 89.8672 44.8265C89.8843 68.2847 70.0213 89.3308 43.8848 88.8406C20.301 88.4005 0.523362 68.3961 0.620227 44.4978Z"
            fill="url(#paint0_linear_199_1261)"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_199_1261"
            x="0.619873"
            y="0.405487"
            width="103.247"
            height="96.4435"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="10" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_199_1261"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_199_1261"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_199_1261"
            x1="0.619874"
            y1="10.5474"
            x2="267.373"
            y2="159.265"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8A0917" />
            <stop offset="1" stop-color="#680B15" stop-opacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
      <div class="header-h1-container">
        <h1>Red Point Studio</h1>
        <p>L'art du son en coopérative</p>
      </div>
    </div>
    <div class="header-background-video">
      <video
        src="@/assets/img/background-header.webm"
        autoplay
        loop
        muted
        playsinline
      ></video>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  height: 56vw;
  width: 100vw;
}

.header-background-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #19191900 0%, #191919 95%);

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.header-background-video video {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: -2vh;
  left: 0;
  object-fit: cover;
}
.header-h1-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h1 {
  font-size: 100px;
}

p {
  font-size: 30px;
  font-weight: 500;
  padding-left: 5px;
}
svg {
  position: relative;
  bottom: 1.2vh;
}
</style>
