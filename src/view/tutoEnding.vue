<script>
import navigationBar from "@/components/caseTopNavPrivate.vue";
import tutorialNavigation from "@/components/tutoSecondNavigation.vue";

import tutorialEnding from "@/components/tutoIntroduction.vue";
import tutorialEndingIcon from "@/assets/img/tutorial-icon-end.svg";

import stepTextUpImgDown from "@/components/tutoContentVertical.vue";

import stepTextContent from "@/components/tutoContentTextOnly.vue";

import tutorialCarousel from "@/components/tutoCarousel.vue";

import tutorialButton from "@/components/hoverButton.vue";
import longParagraphText from "@/components/boxTextOnly.vue";
import tutorialFooter from "@/components/caseFooterPrivate.vue";

import stepImg1 from "@/assets/img/tutorial-img-ending-1.webp";

export default {
  components: {
    navigationBar,
    tutorialEnding,
    tutorialNavigation,
    stepTextUpImgDown,
    stepTextContent,
    tutorialCarousel,
    tutorialButton,
    longParagraphText,
    tutorialFooter,
  },
  data() {
    return {
      tutorialEndingIcon: tutorialEndingIcon,
      stepImg1: stepImg1,
    };
  },
};
</script>

<template>
  <navigationBar />
  <div class="tutorial-navigation">
    <tutorial-navigation
      tutorialNavigationTitle="6. Fin de séance"
      :links="[
        { text: '1.1 Éteindre Horus', url: '#endingStepOne' },
        { text: '1.2 Éteindre le mac et ranger', url: '#endingStepTwo' },
      ]"
      prevPageUrl="/tutoExport"
      nextPageUrl="/"
      nextArrowColor="#fffff98c"
    ></tutorial-navigation>
  </div>
  <div class="tutorial-content-container">
    <tutorialEnding
      id="endingStepOne"
      tutorialIntroductionTitle="6. Fin de séance"
      tutorialIntroductionText="
      La marche à suivre pour toutes les fins de séances, c’est-à-dire la fermeture des applications ainsi que le rangement du studio."
      :tutorialIntroductionIcon="tutorialEndingIcon"
    />
    <div class="step-container">
      <stepTextContent
        id="endingStepTwo"
        paragraphTextContentTitle="1. Fin de séance"
        paragraphTextContent="<span class='bold-large'>1.1</span> Dans Safari, accédez à la page de commande de Horus et cliquez sur le petit triangle en bas à gauche de l’écran pour fermer la fenêtre de réglage des préamplificateurs. Ensuite, cliquez sur :
    
        Setup
        Shut down 
        Yes"
      />
      <stepTextUpImgDown
        paragraphTextBonus="Si vous éteignez le Mac avant Horus, il est possible d’éteindre Horus via son écran tactile."
        paragraphTextImg="
        <span class='bold-large'>1.2</span> Éteindre le mac et ranger"
        :paragraphTextImgImage="stepImg1"
        :showTextBonus="true"
      />

      <stepTextContent
        paragraphTextContent="1. Éteignez le Mac.
        2. Rangez le matériel comme vous l'avez trouvé.
        3. Éteignez les deux interrupteurs sur le tableau électrique.
        4. Quittez le studio en emportant vos déchets et en le laissant dans l'état où vous l'avez trouvé à votre arrivée. Merci!

        Sociétaires : Fermez la porte via l’application Nuki. 
        Utilisateurs eikon : Appelez le secrétariat ou votre responsable pour fermer la porte."
      />
    </div>

    <tutorialCarousel
      backgroundEnding="#191919"
      prevPageUrl="/tutoExport"
      nextPageUrl="false"
      opacityNextPage="0.3"
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
    <img src="@/assets/img/background-ending.webp" alt="" />
  </div>
</template>

<style scoped></style>
