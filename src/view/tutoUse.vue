<script>
import navigationBar from "@/components/caseTopNavPrivate.vue";
import tutorialNavigation from "@/components/tutoSecondNavigation.vue";

import tutorialUse from "@/components/tutoIntroduction.vue";
import tutorialUseIcon from "@/assets/img/tutorial-icon-monitoring.svg";

import stepTextLeftImgRight from "@/components/tutoContentHorizontal.vue";

import tutorialCarousel from "@/components/tutoCarousel.vue";

import tutorialButton from "@/components/hoverButton.vue";
import longParagraphText from "@/components/boxTextOnly.vue";
import tutorialFooter from "@/components/caseFooterPrivate.vue";

import stepImg1 from "@/assets/img/tutorial-img-use-1.webp";
export default {
  components: {
    navigationBar,
    tutorialUse,
    tutorialNavigation,
    stepTextLeftImgRight,
    tutorialCarousel,
    tutorialButton,
    longParagraphText,
    tutorialFooter,
  },
  data() {
    return {
      tutorialUseIcon: tutorialUseIcon,
      stepImg1: stepImg1,
    };
  },
};
</script>

<template>
  <navigationBar />
  <div class="tutorial-navigation">
    <tutorial-navigation
      tutorialNavigationTitle="3. Monitoring vidéo"
      :links="[
        { text: '1.1 Retarder le monitoring', url: '#useStepOne' },
        { text: '1.2 Ajouter le plugin', url: '#useStepOne' },
      ]"
      prevPageUrl="/tutoService"
      nextPageUrl="/tutoSettings"
    ></tutorial-navigation>
  </div>
  <div class="tutorial-content-container">
    <tutorialUse
      tutorialIntroductionTitle="3. Utilisation du monitoring vidéo"
      tutorialIntroductionText="Tutoriel pour retarder le monitoring audio afin de rétablir la synchronisation avec la TV."
      :tutorialIntroductionIcon="tutorialUseIcon"
    />
    <div class="step-container">
      <stepTextLeftImgRight
        id="useStepOne"
        paragraphTextImgTitle="1. Utilisation du monitoring vidéo"
        paragraphTextImg="La télévision de la régie présente une latence de 100 millisecondes par rapport au son.

        <span class='bold-large'>1.1</span> Il est donc nécessaire de retarder le monitoring audio pour rétablir la synchronisation.

        <span class='bold-large'>1.2</span> Dans Logic, ajoutez un plugin Sample Delay sur la sortie de monitoring de la régie."
        :paragraphTextImgImage="stepImg1"
      />
    </div>

    <tutorialCarousel
      backgroundUse="#191919"
      nextPageUrl="/tutoSettings"
      prevPageUrl="/tutoService"
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
    <img src="@/assets/img/background-use.webp" alt="" />
  </div>
</template>

<style>
.background-container {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
}

.background-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
