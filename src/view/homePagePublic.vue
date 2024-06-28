<script>
import publicNavigation from "@/components/caseTopNavPublic.vue";
import publicHeader from "@/components/caseHeader.vue";
import publicFooter from "@/components/caseFooterPublic.vue";

import publicCards from "@/components/cardsMaterial.vue";
import publicBoxContent from "@/components/boxContentVertical.vue";
import publicText from "@/components/boxTextOnly.vue";
import publicTextDuo from "@/components/boxTextDuo.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: {
    publicNavigation,
    publicHeader,
    publicFooter,
    publicCards,
    publicBoxContent,
    publicText,
    publicTextDuo,
  },
  data() {
    return {};
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.tutorialContainerAnimationLeft();
  },

  methods: {
    tutorialContainerAnimationLeft() {
      const classes = [
        ".tutorial-container-installation",
        ".tutorial-container-service",
        ".tutorial-container-monitoring",
        ".tutorial-container-settings",
        ".tutorial-container-export",
        ".tutorial-container-end",
      ];

      classes.forEach((cls) => {
        gsap.from(cls, {
          scrollTrigger: {
            trigger: cls,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
          y: 80,
          opacity: 0,
          ease: "power3.out",
          duration: 2,
          delay: 0.5,
        });
      });
    },
  },
};
</script>

<template>
  <publicNavigation />
  <publicHeader />

  <div class="studio-container">
    <h3 id="navPublicStudio">Studio</h3>
    <publicText
      boxTextOnlyContent="Construit en 2023, le Red Point Studio est un studio de 
    mixage musique et cinéma coopératif de très haute qualité situé à Fribourg, 
    Suisse. L’infrastructure comprend une régie de 20 m2 qui accueille 
    confortablement 5 à 6 personnes et une cabine de prise de son de 12 m2 
    destinée à la prise de son de voix, de bruitage ou d’instruments solos. 
    Le design acoustique est signé Delphine Bard. La régie est équipée d’un 
    système 5.1 PSI audio et d’une interface audionumérique Merging Horus 16 in 
    8 out."
    />
  </div>
  <div class="coop-container">
    <publicBoxContent titleContent="Coopératif ?" />
  </div>
  <div class="material-container">
    <h3 id="navPublicMateriel">Matériel</h3>
    <publicCards />
  </div>

  <publicTextDuo
    id="navPublicAcces"
    class="public-page-double-paragraph"
    boxTextDuoTitleLeft="Accès"
    boxTextDuoTitleRight="Contact"
    boxTextDuoLeft="Route de la Fonderie 8c, 1700, Fribourg.

    Arrêt de bus Charmettes Lignes 1, 3, 8, 9.

    1 place de parc “Red Point Studio” à droite des boites aux lettres"
    boxTextDuoRight="Vous voulez en savoir plus ?
    Vous souhaitez devenir membre ?
    Contactez-nous: info@audibiltiy.ch"
    buttonTextLeft="Voir les trajets CFF"
    buttonTextRight="Prendre contact"
    hoverButtonALeft="https://www.sbb.ch/fr?date=%222024-05-02%22&moment=%22DEPARTURE%22&stops=%5B%7B%22type%22:%22COORDINATES%22,%22label%22:%22Position%20actuelle%22,%22value%22:%22%5B7.096441064598848,46.82222556442361%5D%22%7D,%7B%22value%22:%22A%3D2@O%3D1700%20Fribourg,%20Route%20de%20la%20Fonderie%208c@H%3D8c@X%3D7153211@Y%3D46794454@U%3D103@L%3D990026447@B%3D1@p%3D1719223382@%22,%22type%22:%22ID%22,%22label%22:%221700%20Fribourg,%20Route%20de%20la%20Fonderie%208c%22%7D%5D&time=%2210:52%22"
    hoverButtonARight="mailto:info@audibiltiy.ch"
  />

  <publicFooter />
  <div class="background-container">
    <img src="@/assets/img/background-public.webp" alt="" />
  </div>
</template>

<style scoped></style>
