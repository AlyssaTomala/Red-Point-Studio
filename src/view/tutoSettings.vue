<script>
import navigationBar from "@/components/caseTopNavPrivate.vue";

import tutorialNavigation from "@/components/tutoSecondNavigation.vue";

import tutorialSettings from "@/components/tutoIntroduction.vue";
import tutorialSettingsIcon from "@/assets/img/tutorial-icon-settings.svg";

import stepTextLeftImgRight from "@/components/tutoContentHorizontal.vue";

import stepTextDuoImg from "@/components/tutoContentDuoVertical.vue";

import stepTextUpImgDown from "@/components/tutoContentVertical.vue";

import stepTextContent from "@/components/tutoContentTextOnly.vue";

import tutorialCarousel from "@/components/tutoCarousel.vue";

import tutorialButton from "@/components/hoverButton.vue";
import longParagraphText from "@/components/boxTextOnly.vue";
import tutorialFooter from "@/components/caseFooterPrivate.vue";

import stepImg11 from "@/assets/img/tutorial-img-settings-1-1.webp";
import stepImg12 from "@/assets/img/tutorial-img-settings-1-2.webp";
import stepImg2 from "@/assets/img/tutorial-img-settings-2.webp";
import stepImg4Left from "@/assets/img/tutorial-img-settings-4-left.webp";
import stepImg4Right from "@/assets/img/tutorial-img-settings-4-right.webp";

export default {
  components: {
    navigationBar,
    tutorialSettings,
    tutorialNavigation,
    stepTextDuoImg,
    stepTextLeftImgRight,
    stepTextUpImgDown,
    stepTextContent,
    tutorialCarousel,
    tutorialButton,
    longParagraphText,
    tutorialFooter,
  },
  data() {
    return {
      tutorialSettingsIcon: tutorialSettingsIcon,
      stepImg11: stepImg11,
      stepImg12: stepImg12,
      stepImg2: stepImg2,
      stepImg4Left: stepImg4Left,
      stepImg4Right: stepImg4Right,
    };
  },
};
</script>

<template>
  <navigationBar />
  <div class="tutorial-navigation">
    <tutorial-navigation
      tutorialNavigationTitle="4. Réglages"
      :links="[
        { text: '1. Réglages des micros', url: '#settingsStepOne' },
        { text: '2. Réglages des casques', url: '#settingsStepTwo' },
        {
          text: '3. Réglages du monitoring et des casques',
          url: '#settingsStepThree',
        },
        { text: '4. Fonctionnement du talkback', url: '#settingsStepFour' },
        { text: '5. Enregistrement', url: '#settingsStepFive' },
      ]"
      prevPageUrl="/tutoUse"
      nextPageUrl="/tutoExport"
    ></tutorial-navigation>
  </div>
  <div class="tutorial-content-container">
    <tutorialSettings
      tutorialIntroductionTitle="4. Réglages"
      tutorialIntroductionText="Tutoriel concernant le réglage du micro, des casques et monitoring en plus du fonctionnement du talkback. "
      :tutorialIntroductionIcon="tutorialSettingsIcon"
    />
    <div class="step-container">
      <stepTextUpImgDown
        id="settingsStepOne"
        paragraphTextImgTitle="1. Réglage des micros"
        paragraphTextImg="<span class='bold-large'>1.1</span> Préparez la piste micro pour l’enregistrement en appuyant sur le bouton rouge “R”"
        :paragraphTextImgImage="stepImg11"
      />

      <stepTextLeftImgRight
        paragraphTextImg="<span class='bold-large'>1.2</span> Lancer l’application Safari"
        :paragraphTextImgImage="stepImg12"
        paragraphTextBonus="Safari s’ouvre par défaut sur la page de commande de l’interface Horus"
        :showTextBonus="true"
      />
    </div>
    <div class="step-container">
      <stepTextLeftImgRight
        id="settingsStepTwo"
        paragraphTextImgTitle="2. Réglage des micros"
        paragraphTextImg="La piste 8 est connectée au micro de talkback. 
        
        La piste 9 est connectée au micro installé dans la cabine de prise de son.


        <span class='bold-large'>2.1</span> Réglez les pistes 8 et 9 sur “Mic” en cliquant sur “Line”.

        <span class='bold-large'>2.2</span>  Activez l'alimentation fantôme 48V pour les deux pistes.

        <span class='bold-large'>2.3</span> Ajustez le volume d'entrée de la piste 8 à 40.

        <span class='bold-large'>2.4</span> Pour la piste 9, demandez à votre speaker de parler et ajustez le volume d'entrée de manière à obtenir le niveau le plus élevé possible sans atteindre le rouge. Commencez à 30 et augmentez progressivement.

        <span class='bold-large'>2.5</span> Pour supprimer un signal de saturation (rouge), cliquez sur “RST PEAKS”."
        :paragraphTextImgImage="stepImg2"
      />
    </div>
    <div class="step-container">
      <stepTextContent
        id="settingsStepThree"
        paragraphTextContentTitle="3. Réglage du monitoring et des casques"
        paragraphTextContent="<span class='bold-large'>3.1</span> Dans les sessions de modèle, les volumes de sortie pour la régie et le casque sont par défaut réglés à -20. Vous pourrez les ajuster ultérieurement avec prudence.
      
        <span class='bold-large'>3.2</span> Il est également possible de régler le volume des pistes micro et talkback. Cela n'affecte pas le volume d'enregistrement."
      />
    </div>
    <div class="step-container">
      <stepTextDuoImg
        id="settingsStepFour"
        paragraphTextImgTitle="4. Fonctionnement du Talkback"
        paragraphTextImg="<span class='bold-large'>4.1</span> Le template est configuré pour que le talkback ne soit audible que dans le casque et non sur les haut-parleurs de la régie. Conservez ce réglage pour éviter les effets Larsen, qui peuvent être très désagréables.
    
        <span class='bold-large'>4.2</span> Le plug-in Mute-o-Matic sur la piste de talkback rend automatiquement le micro talkback muet pendant l’enregistrement. Vous devez arrêter l’enregistrement pour parler au speaker.
"
        :imgDuoImageRight="stepImg4Right"
        :imgDuoImageLeft="stepImg4Left"
        paragraphTextBonus="Il est possible de désactiver le plug-in Mute-o-Matic, permettant ainsi de parler au speaker pendant l’enregistrement."
        :showTextBonus="true"
      />
    </div>
    <div class="step-container">
      <stepTextContent
        id="settingsStepFive"
        paragraphTextContentTitle="5. Enregistrement"
        paragraphTextContent=" <span class='bold-large'>5.1</span> Appuyez sur le bouton rouge ou sur la touche “R” pour démarrer l’enregistrement."
        paragraphTextBonus="Logic est configuré pour créer automatiquement une nouvelle piste lorsque plusieurs enregistrements se superposent sur la timeline."
        :showTextBonus="true"
      />
    </div>

    <tutorialCarousel
      backgroundSettings="#191919"
      nextPageUrl="/tutoExport"
      prevPageUrl="/tutoUse"
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
    <img src="@/assets/img/background-settings.webp" alt="" />
  </div>
</template>

<style scoped></style>
