<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import cardsText from "@/components/cardsText.vue";
export default {
  components: {
    // cardsText,
  },
  data() {
    return {};
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.cardAnimation();
  },

  methods: {
    cardAnimation() {
      gsap.from(".card-container", {
        scrollTrigger: {
          trigger: ".card-container",
          start: "-10% 100%",
          end: "-10% 20%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        stagger: 0.5,
        duration: 4.5,
        ease: "power3.out",
      });
    },
  },
};
</script>
<template>
  <div class="all-cards-container">
    <div class="card-container">
      <div class="card-img-hover-container">
        <div class="card-img-hover-text">
          <div class="card-img-hover-text-list">
            <p>2x Schoeps CCM</p>
            <p>2x Schoeps MK4</p>
            <p>2x Schopes MK2</p>
            <br />
            <p>Gefell U92M</p>
            <br />
            <p>2x DPA 4006</p>
            <p>2x DPA 4011</p>
            <br />
            <p>2x AKG 414 vintage</p>
          </div>
        </div>
      </div>
      <p class="card-title">Microphones</p>
      <div class="card-img-container card-img-mics"></div>
    </div>
    <div class="card-container">
      <div class="card-img-hover-container">
        <div class="card-img-hover-text">
          <div class="card-img-hover-text-list">
            <p>Merging Horus</p>
            <p>16 in (Premium)</p>
            <p>8 out (Premium)</p>
          </div>
        </div>
      </div>
      <p class="card-title">Interface</p>
      <div class="card-img-container card-img-interface"></div>
    </div>
    <div class="card-container">
      <div class="card-img-hover-container">
        <div class="card-img-hover-text">
          <div class="card-img-hover-text-list">
            <p>PSI Audio</p>
            <p>2x A21</p>
            <p>1x A214</p>
            <p>1x A25</p>
            <p>2x A14</p>
            <br />
            <p>Ordinateur Mac Studio M2</p>
          </div>
        </div>
      </div>
      <p class="card-title">Haut-parleurs</p>
      <div class="card-img-container card-img-speakers"></div>
    </div>
    <div class="card-container">
      <div class="card-img-hover-container">
        <div class="card-img-hover-text">
          <div class="card-img-hover-text-list">
            <p>Reaper</p>
            <p>Logic audio</p>
            <p>Ableton Live 11</p>
            <p>Isotope RX</p>
          </div>
        </div>
      </div>
      <p class="card-title">Logiciels</p>
      <div class="card-img-container card-img-logiciels"></div>
    </div>
    <div class="card-container">
      <div class="card-img-hover-container">
        <div class="card-img-hover-text">
          <div class="card-img-hover-text-list">
            <p>Nativ Instruments complete 13</p>
            <p>Flux Ircam ultimate pack</p>
            <p>Sound toys</p>
            <p>Auto align post 2</p>

            <p>Gefell U92M</p>

            <p>Supertone Clear</p>
            <p>Knufinke SIR2</p>

            <p>Izotope Everything Bundle 2024</p>
          </div>
        </div>
      </div>
      <p class="card-title">Plugins</p>
      <div class="card-img-container card-img-plugins"></div>
    </div>
  </div>
</template>

<style scoped>
.all-cards-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: min-content;
  /* background-color: rgb(111, 111, 180); */
}
.card-container {
  width: 17%;
  aspect-ratio: 0.65/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  border: 0.5px solid var(--color-grey-800, #343434);
  background: var(--color-brand-Backgroundblur, rgba(255, 247, 247, 0.08));
  box-shadow: 0px 0px 15.1px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(1.9500000476837158px);
}

.card-title {
  position: absolute;
  z-index: 10;
  width: 80%;
  height: 90%;
  display: flex;
  align-items: flex-end;
  padding: 8px;
  font-size: 20px;
}

.card-img-container {
  width: 100%;
  height: 100%;
  margin: 7px;
  /* background-color: rgb(255, 255, 255); */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%),
    url(/src/assets/img/card-img-test.webp);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 6.5px;
}

.card-img-mics {
}
.card-img-interface {
}
.card-img-speakers {
}
.card-img-logiciels {
}
.card-img-plugins {
}

.card-img-hover-container {
  position: absolute;
  width: 90%;
  aspect-ratio: 0.6/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    164deg,
    rgba(25, 25, 25, 0.32) -13%,
    rgba(25, 25, 25, 0.5) 115%
  );
  box-shadow: 2px 4px 9.2px 0px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  opacity: 0;
  border-radius: 5px;
  animation: cardHoverOpacityOut 0.2s ease-in-out;
}

.card-img-hover-text {
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-img-hover-text-list p {
  padding: 1.5px 0;
}

.card-container:hover .card-img-hover-container {
  opacity: 1;
  animation: cardHoverOpacityIn 0.2s ease-in-out backwards;
}

@keyframes cardHoverOpacityIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes cardHoverOpacityOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
