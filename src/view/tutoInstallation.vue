<script>
import navigationBar from "@/components/caseTopNavPrivate.vue";

import tutorialNavigation from "@/components/tutoSecondNavigation.vue";

import tutorialIntroduction from "@/components/tutoIntroduction.vue";
import tutorialIntroductionIcon from "@/assets/img/tutorial-icon-installation.svg";

import stepTextImg from "@/components/tutoContentHorizontal.vue";

import stepImg from "@/components/tutoContentImgOnly.vue";

import tutorialCarousel from "@/components/tutoCarousel.vue";

import tutorialButton from "@/components/hoverButton.vue";
import longParagraphText from "@/components/boxTextOnly.vue";
import tutorialFooter from "@/components/caseFooterPrivate.vue";

import stepImg1 from "@/assets/img/tutorial-img-install-1.webp";
import stepImg11 from "@/assets/img/tutorial-img-install-1-1.webp";
import stepImg12 from "@/assets/img/tutorial-img-install-1-2.webp";
import stepImg13 from "@/assets/img/tutorial-img-install-1-3.webp";
import stepImg2 from "@/assets/img/tutorial-img-install-2.webp";
import stepImg3 from "@/assets/img/tutorial-img-install-3.webp";

export default {
  components: {
    navigationBar,
    stepImg,
    tutorialIntroduction,
    tutorialNavigation,
    stepTextImg,
    tutorialCarousel,
    tutorialButton,

    longParagraphText,
    tutorialFooter,
  },
  data() {
    return {
      stepImg1: stepImg1,
      stepImg11: stepImg11,
      stepImg12: stepImg12,
      stepImg13: stepImg13,
      stepImg2: stepImg2,
      stepImg3: stepImg3,
      tutorialIntroductionIcon: tutorialIntroductionIcon,
    };
  },
};
</script>

<template>
  <navigationBar />
  <div class="tutorial-navigation">
    <tutorial-navigation
      tutorialNavigationTitle="1. Installation"
      :links="[
        { text: '1. Branchement des micros', url: '#installStepOne' },
        { text: '2. Branchement des casques', url: '#installStepTwo' },
        { text: '3. Branchement du talk back', url: '#installStepThree' },
      ]"
      prevPageUrl="/"
      prevArrowColor="#fffff98c"
      nextPageUrl="/tutoService"
    ></tutorial-navigation>
  </div>

  <div class="tutorial-content-container">
    <tutorialIntroduction
      tutorialIntroductionTitle="1. Installation"
      tutorialIntroductionText="Marche à suivre du branchement d’un micro et d’un casque ainsi que l’enregistrement des voix ou des bruitages dans Logic Audio."
      showTextWarning="true"
      textWarning="Ne pas allumer l’interface Horus avant que le(s) micro(s) soient câblé(s) !"
      :tutorialIntroductionIcon="tutorialIntroductionIcon"
    />
    <div class="step-container step-one-container">
      <div class="inner-step-container" id="installStepOne">
        <stepTextImg
          paragraphTextImgTitle="1. Branchement des micros"
          paragraphTextImg="<span class='bold-large'>1.1</span> Matériel
          Le matériel se trouve sur l’étagère rouge dans le sas technique :
        
      
        - Un filtre anti-pop
        
        - Une câble XLR
        
        - Un pied de micro
        
        - Un casque
        
        - Un micro Schoeps
        
        - Une pince Schoeps
        
        "
          paragraphTextBonus="Deux capsules différentes sont disponibles pour les Schoeps. Vérifiez que vous utilisez une capsule cardioïde MK4."
          :paragraphTextImgImage="stepImg1"
          :showTextBonus="true"
        />
      </div>

      <stepImg :rightImage="stepImg11" />
      <stepTextImg
        paragraphTextImg="<span class='bold-large'>1.2</span> Installer tous les éléments dans la cabine comme illustré sur l'image pour la prise de son."
        :paragraphTextImgImage="stepImg12"
        :showTextBonus="false"
      />

      <stepTextImg
        paragraphTextImg="<span class='bold-large'>1.3</span> Connectez le micro à l'entrée numéro 1 du patch."
        :paragraphTextImgImage="stepImg13"
        :showTextBonus="false"
      />
    </div>

    <div class="step-container" id="installStepTwo">
      <stepTextImg
        paragraphTextImgTitle="2. Branchement des casques"
        paragraphTextImg="<span class='bold-large'>2.1</span> Branchez le casque à l'une des sorties du préamplificateur de casque. Assurez-vous que le volume de sortie soit en position moyenne."
        paragraphTextBonus="Il est possible de brancher jusqu’à 8 micros et 8 casques simultanément."
        :paragraphTextImgImage="stepImg2"
        :showTextBonus="true"
      />
    </div>
    <div class="step-container" id="installStepThree">
      <stepTextImg
        paragraphTextImgTitle="3. Branchement du talk back"
        paragraphTextImg="<span class='bold-large'>3.</span> Dans la régie, vérifiez que le micro de talkback est branché sur l'entrée 8 du patch situé à l'arrière de la table de régie. "
        paragraphTextBonus="Assurez-vous que la communication entre la régie et la cabine fonctionne correctement."
        :paragraphTextImgImage="stepImg3"
        :showTextBonus="true"
      />
    </div>
    <tutorialCarousel
      backgroundInstallation="#191919"
      nextPageUrl="/tutoService"
      previousPageUrl="false"
      opacityPreviousPage="0.4"
    />
    <tutorialButton class="tutorial-button" hoverButtonRouter="/summaryPage">
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
    <img src="@/assets/img/background-installation.webp" alt="" />
  </div>
</template>

<style scoped></style>
