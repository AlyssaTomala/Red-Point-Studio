<script>
import privateNavigation from "@/components/caseTopNavPrivate.vue";
import privateHeader from "@/components/caseHeader.vue";
import privateFooter from "@/components/caseFooterPrivate.vue";

import privateCards from "@/components/cardsMaterial.vue";
import privateBoxContent from "@/components/boxContentVertical.vue";
import privateBoxText from "@/components/boxTextOnly.vue";
import privateBoxTextDuo from "@/components/boxTextDuo.vue";
import privateCaseTutoLeft from "@/components/caseLeftTuto.vue";
import privateCaseTutoRight from "@/components/caseRightTuto.vue";
import privateTutoButton from "@/components/hoverButton.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: {
    privateNavigation,
    privateHeader,
    privateFooter,
    privateCards,
    privateBoxContent,
    privateBoxText,
    privateBoxTextDuo,
    privateCaseTutoLeft,
    privateCaseTutoRight,
    privateTutoButton,
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
  <privateNavigation />
  <privateHeader />

  <div class="studio-container">
    <h3>Studio</h3>
    <privateBoxText
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
    <privateBoxContent titleContent="Coopératif ?" />
  </div>
  <div class="material-container">
    <h3>Matériel</h3>
    <privateCards />
  </div>

  <privateBoxTextDuo
    id="navPrivateAcces"
    class="private-page-double-paragraph"
    boxTextDuoTitleLeft="Informations pratiques"
    boxTextDuoTitleRight="Réservation"
    boxTextDuoLeft="Voici toutes les
  informations essentielles concernant le Red Point Studio : horaires et tarifs,
  collaborateurs, contacts utiles, et détails sur l'accessibilité de notre
  lieu."
    boxTextDuoRight="Pour réserver le studio, veuillez contacter le
  responsable par téléphone."
    buttonTextLeft="Se renseigner"
    buttonTextRight="Prendre rendez-vous"
    hoverButtonRouterLeft="/infosPage"
    hoverButtonARight="tel:+41 79 631 28 70"
  />

  <h3 id="tutorialSection">Tutoriel : Enregistrement de voix ou bruitage</h3>
  <privateCaseTutoLeft
    class="tutorial-container-installation"
    h3Tutorial="Installation"
    textTutorial="Marche à suivre
  du branchement d’un micro et d’un casque ainsi que l’enregistrement des voix
  ou des bruitages dans Logic Audio."
    buttonTextTutorial="Voir le tutoriel"
    hoverButtonRouter="/tutoInstallation"
    :backgroundImageTutorial="
      require('@/assets/img/homepage-img-tutorial-installation.webp')
    "
    :iconTutorial="require('@/assets/img/tutorial-icon-installation.svg')"
  />

  <privateCaseTutoRight
    class="tutorial-container-service"
    h3Tutorial="Mise en service"
    textTutorial="Tutoriel pour l’alimentation électrique et la mise en marche 
    des machines."
    buttonTextTutorial="Voir le tutoriel"
    hoverButtonRouter="/tutoService"
    :backgroundImageTutorial="
      require('@/assets/img/homepage-img-tutorial-service.webp')
    "
    :iconTutorial="require('@/assets/img/tutorial-icon-service.svg')"
  />

  <privateCaseTutoLeft
    class="tutorial-container-monitoring"
    h3Tutorial="Utilisation du monitoring"
    textTutorial="Tutoriel pour retarder le monitoring audio afin de rétablir 
    la synchronisation avec la TV."
    buttonTextTutorial="Voir le tutoriel"
    hoverButtonRouter="/tutoUse"
    :backgroundImageTutorial="
      require('@/assets/img/homepage-img-tutorial-use.webp')
    "
    :iconTutorial="require('@/assets/img/tutorial-icon-monitoring.svg')"
  />

  <privateCaseTutoRight
    class="tutorial-container-settings"
    h3Tutorial="Réglages"
    textTutorial="Tutoriel concernant le réglage du micro, des casques et 
    monitoring en plus du fonctionnement du talkback. "
    buttonTextTutorial="Voir le tutoriel"
    hoverButtonRouter="/tutoSettings"
    :backgroundImageTutorial="
      require('@/assets/img/homepage-img-tutorial-settings.webp')
    "
    :iconTutorial="require('@/assets/img/tutorial-icon-settings.svg')"
  />

  <privateCaseTutoLeft
    class="tutorial-container-export"
    h3Tutorial="Exportation des données"
    textTutorial="Tutoriel qui explique toutes les étapes d’exportation après 
    l’enregistrement de votre projet."
    buttonTextTutorial="Voir le tutoriel"
    hoverButtonRouter="/tutoExport"
    :backgroundImageTutorial="
      require('@/assets/img/homepage-img-tutorial-export.webp')
    "
    :iconTutorial="require('@/assets/img/tutorial-icon-export.svg')"
  />

  <privateCaseTutoRight
    class="tutorial-container-end"
    h3Tutorial="Fin de séance"
    textTutorial="La marche à suivre pour toutes les fins de séances, 
    c’est-à-dire la fermeture des applications ainsi que le rangement du studio.
    "
    buttonTextTutorial="Voir le tutoriel"
    hoverButtonRouter="/tutoEnding"
    :backgroundImageTutorial="
      require('@/assets/img/homepage-img-tutorial-ending.webp')
    "
    :iconTutorial="require('@/assets/img/tutorial-icon-end.svg')"
  />
  <privateTutoButton hoverButtonRouter="/summaryPage" backgroundColor="#292626">
    <p class="all-tutorial-button-p">Voir tous les tutoriels</p>
  </privateTutoButton>
  <privateFooter />
  <div class="background-container">
    <img src="@/assets/img/background-private.webp" alt="" />
  </div>
</template>

<style scoped></style>
