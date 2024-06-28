<script>
import navigationBar from "@/components/caseTopNavPrivate.vue";
import tutorialNavigation from "@/components/tutoSecondNavigation.vue";

import tutorialExport from "@/components/tutoIntroduction.vue";
import tutorialExportIcon from "@/assets/img/tutorial-icon-export.svg";

import stepTextUpImgDown from "@/components/tutoContentVertical.vue";

import tutorialCarousel from "@/components/tutoCarousel.vue";

import tutorialButton from "@/components/hoverButton.vue";
import longParagraphText from "@/components/boxTextOnly.vue";
import tutorialFooter from "@/components/caseFooterPrivate.vue";

import stepImg1 from "@/assets/img/tutorial-img-export-1.webp";

export default {
  components: {
    navigationBar,
    tutorialExport,
    tutorialNavigation,
    stepTextUpImgDown,
    tutorialCarousel,
    tutorialButton,
    longParagraphText,
    tutorialFooter,
  },
  data() {
    return {
      tutorialExportIcon: tutorialExportIcon,
      stepImg1: stepImg1,
    };
  },
};
</script>

<template>
  <navigationBar />
  <div class="tutorial-navigation">
    <tutorial-navigation
      tutorialNavigationTitle="5. Exportation"
      :links="[
        { text: '1.1 Enregistrer et quitter', url: '#exportStepOne' },
        { text: '1.2 Vérification', url: '#exportStepOne' },
        { text: '1.3 Supprimer', url: '#exportStepOne' },
      ]"
      prevPageUrl="/tutoSettings"
      nextPageUrl="/tutoEnding"
    ></tutorial-navigation>
  </div>
  <div class="tutorial-content-container">
    <tutorialExport
      tutorialIntroductionTitle="5. Exportation des données"
      tutorialIntroductionText="Tutoriel qui explique toutes les étapes d’exportation après l’enregistrement de votre projet."
      :tutorialIntroductionIcon="tutorialExportIcon"
    />
    <div class="step-container">
      <stepTextUpImgDown
        id="exportStepOne"
        paragraphTextImgTitle="1. Exportation des données"
        paragraphTextImg="<span class='bold-large'>1.1</span> Une fois l’enregistrement terminé, quittez Logic et récupérez le dossier de votre projet sur le bureau. Ce dossier contient la session Logic ainsi que tous les fichiers audio enregistrés.
      
        <span class='bold-large'>1.2</span> Il est fortement recommandé de vérifier que la session Logic s'ouvre correctement sur votre ordinateur et que tous les fichiers audio sont présents sur la timeline après le transfert.

        <span class='bold-large'>1.3</span> Supprimez ensuite le dossier de l’ordinateur du studio, car les documents laissés sur le bureau seront régulièrement supprimés."
        :paragraphTextImgImage="stepImg1"
      />
    </div>

    <tutorialCarousel
      backgroundExport="#191919"
      nextPageUrl="/tutoEnding"
      prevPageUrl="/tutoSettings"
    />
    <tutorialButton hoverButtonRouter="/summaryPage">
      <p class="all-tutorial-button-p">
        Voir tous les tutoriels
      </p></tutorialButton
    >
    <div class="tutorial-broken-case-container">
      <h3>Signaler un problème</h3>
      <longParagraphText
        boxTextOnlyContent="Un problème a été rencontré lors de ce tutoriel ? Faites-le nous savoir."
      />
      <tutorialButton hoverButtonA="mailto:info@audibiltiy.ch">
        <p>Envoyer un rapport</p></tutorialButton
      >
    </div>
  </div>
  <tutorialFooter />
  <div class="background-container">
    <img src="@/assets/img/background-export.webp" alt="" />
  </div>
</template>

<style scoped></style>
