<script>
import headerSection from "@/components/headerSection.vue";
import cardsMaterial from "@/components/cardsMaterial.vue";
import coopSection from "@/components/coopSection.vue";
import studioSection from "@/components/studioSection.vue";
import doubleParagraph from "@/components/paragraphDouble.vue";
import tutorialContainerLeft from "@/components/tutorialContainerLeft.vue";
import tutorialContainerRight from "@/components/tutorialContainerRight.vue";
import allTutorialButton from "@/components/hoverButton.vue";
import gradientBackgroundHomepagePrivate from "@/components/gradientHomepagePrivate.vue";
import footerSection from "@/components/footerSectionPrivate.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: {
    headerSection,
    cardsMaterial,
    coopSection,
    studioSection,
    doubleParagraph,
    tutorialContainerLeft,
    tutorialContainerRight,

    allTutorialButton,
    footerSection,
    gradientBackgroundHomepagePrivate,
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
  <gradientBackgroundHomepagePrivate />
  <headerSection />

  <div class="studio-container">
    <h3>Studio</h3>
    <studioSection />
  </div>
  <div class="material-container">
    <h3>Matériel</h3>
    <cardsMaterial />
  </div>
  <div class="coop-container">
    <h3>Coopératif ?</h3>
    <coopSection />
  </div>
  <doubleParagraph
    doubleParagraphTitleLeft="Informations pratiques"
    doubleParagraphTextLeft="Voici toutes les informations essentielles 
    concernant le Red Point Studio : horaires et tarifs, collaborateurs, 
    contacts utiles, et détails sur l'accessibilité de notre lieu."
    doubleParagraphTitleRight="Réservation"
    doubleParagraphTextRight="Toutes les informations nécessaires pour 
    effectuer votre réservation. Vous y trouverez les détails des services."
    buttonTextLeft="Se renseigner"
    buttonTextRight="Réserver"
  />
  <h3>Tutoriel: Enregistrement de voix ou bruitage</h3>
  <tutorialContainerLeft
    class="tutorial-container-installation"
    h3Tutorial="Installation"
    textTutorial="Marche à suivre
  du branchement d’un micro et d’un casque ainsi que l’enregistrement des voix
  ou des bruitages dans Logic Audio."
    buttonTextTutorial="Voir le tutoriel"
    :backgroundImageTutorial="require('@/assets/img/card-img-test.webp')"
    :iconTutorial="require('@/assets/img/tutorial-icon-installation.svg')"
  />

  <tutorialContainerRight
    class="tutorial-container-service"
    h3Tutorial="Mise en service"
    textTutorial="Tutoriel pour l’alimentation électrique et la mise en marche 
    des machines."
    buttonTextTutorial="Voir le tutoriel"
    backgroundColor="blue"
    :backgroundImageTutorial="require('@/assets/img/card-img-test.webp')"
    :iconTutorial="require('@/assets/img/tutorial-icon-service.svg')"
  />

  <tutorialContainerLeft
    class="tutorial-container-monitoring"
    h3Tutorial="Utilisation du monitoring"
    textTutorial="Tutoriel pour retarder le monitoring audio afin de rétablir 
    la synchronisation avec la TV."
    buttonTextTutorial="Voir le tutoriel"
    :backgroundImageTutorial="require('@/assets/img/card-img-test.webp')"
    :iconTutorial="require('@/assets/img/tutorial-icon-monitoring.svg')"
  />

  <tutorialContainerRight
    class="tutorial-container-settings"
    h3Tutorial="Réglages"
    textTutorial="Tutoriel concernant le réglage du micro, des casques et 
    monitoring en plus du fonctionnement du talkback. "
    buttonTextTutorial="Voir le tutoriel"
    backgroundColor="blue"
    :backgroundImageTutorial="require('@/assets/img/card-img-test.webp')"
    :iconTutorial="require('@/assets/img/tutorial-icon-settings.svg')"
  />

  <tutorialContainerLeft
    class="tutorial-container-export"
    h3Tutorial="Exportation des données"
    textTutorial="Tutoriel qui explique toutes les étapes d’exportation après 
    l’enregistrement de votre projet."
    buttonTextTutorial="Voir le tutoriel"
    :backgroundImageTutorial="require('@/assets/img/card-img-test.webp')"
    :iconTutorial="require('@/assets/img/tutorial-icon-export.svg')"
  />

  <tutorialContainerRight
    class="tutorial-container-end"
    h3Tutorial="Fin de séance"
    textTutorial="La marche à suivre pour toutes les fins de séances, 
    c’est-à-dire la fermeture des applications ainsi que le rangement du studio.
    "
    buttonTextTutorial="Voir le tutoriel"
    backgroundColor="blue"
    :backgroundImageTutorial="require('@/assets/img/card-img-test.webp')"
    :iconTutorial="require('@/assets/img/tutorial-icon-end.svg')"
  />
  <allTutorialButton class="yo" backgroundColor="#292626">
    <p class="all-tutorial-button-p">Voir tous les tutoriels</p>
  </allTutorialButton>
  <footerSection class="lol" />
</template>

<style scoped></style>
