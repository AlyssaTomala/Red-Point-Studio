<script>
import navigationBar from "@/components/caseTopNavPrivate.vue";
import tutorialNavigation from "@/components/tutoSecondNavigation.vue";

import tutorialService from "@/components/tutoIntroduction.vue";
import tutorialServiceIcon from "@/assets/img/tutorial-icon-service.svg";

import stepTextLeftImgRight from "@/components/tutoContentHorizontal.vue";

import stepTextUpImgDown from "@/components/tutoContentVertical.vue";

import stepTextDuoImg from "@/components/tutoContentDuoVertical.vue";

import stepTextContent from "@/components/tutoContentTextOnly.vue";

import tutorialCarousel from "@/components/tutoCarousel.vue";

import tutorialButton from "@/components/hoverButton.vue";
import longParagraphText from "@/components/boxTextOnly.vue";
import tutorialFooter from "@/components/caseFooterPrivate.vue";

import stepImg1 from "@/assets/img/tutorial-img-service-1.webp";
import stepImg2Left from "@/assets/img/tutorial-img-service-2-left.webp";
import stepImg2Right from "@/assets/img/tutorial-img-service-2-right.webp";
import stepImg3 from "@/assets/img/tutorial-img-service-3.webp";
import stepImg4 from "@/assets/img/tutorial-img-service-4.webp";
import stepImg6 from "@/assets/img/tutorial-img-service-6.webp";

export default {
  components: {
    navigationBar,
    tutorialService,
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
      tutorialServiceIcon: tutorialServiceIcon,
      stepImg1: stepImg1,
      stepImg2Left: stepImg2Left,
      stepImg2Right: stepImg2Right,
      stepImg3: stepImg3,
      stepImg4: stepImg4,
      stepImg6: stepImg6,
    };
  },
};
</script>

<template>
  <navigationBar />
  <div class="tutorial-navigation">
    <tutorial-navigation
      tutorialNavigationTitle="2. Mise en service"
      :links="[
        { text: 'Matériel', url: '#serviceTitleOne' },
        { text: '1. Alimentation électrique', url: '#serviceStepOne' },
        { text: '2. Mise en service Horus et Mac', url: '#serviceStepTwo' },
        { text: '3. Écran TV de la régie', url: '#serviceStepThree' },
        { text: '4. Écran TV de la cabine', url: '#serviceStepFour' },

        { text: 'Informatique', url: '#serviceTitleTwo' },
        {
          text: '5. Mise en service de l’ordinateur et lancement de logic',
          url: '#serviceStepFive',
        },
        {
          text: '6. Chargement de la session template enregistrement',
          url: '#serviceStepSix',
        },
        {
          text: '7. Création d’une session ou importation d’une session',
          url: '#serviceStepSeven',
        },
      ]"
      prevPageUrl="/tutoInstallation"
      nextPageUrl="/tutoUse"
    ></tutorial-navigation>
  </div>
  <div class="tutorial-content-container">
    <tutorialService
      tutorialIntroductionTitle="2. Mise en service"
      tutorialIntroductionText="Tutoriel pour l’alimentation électrique et la mise en marche des machines."
      :tutorialIntroductionIcon="tutorialServiceIcon"
    />
    <div class="step-container">
      <h3 class="title-step-container" id="serviceTitleOne">Matériel</h3>
      <div class="specific-step-container">
        <stepTextLeftImgRight
          id="serviceStepOne"
          paragraphTextImgTitle="1. Alimentation électrique et mise en marche des machines"
          paragraphTextImg="<span class='bold-large'>1.1</span> Dans le sas technique, allumez les interrupteurs 1 et 2 sur le tableau électrique."
          :paragraphTextImgImage="stepImg1"
        />
      </div>
      <div class="specific-step-container">
        <stepTextDuoImg
          id="serviceStepTwo"
          paragraphTextImgTitle="2. Enclencher l’interface Horus et le Mac"
          paragraphTextImg="Ne pas allumer l’interface Horus avant que le(s) micro(s) soient câblé(s) !"
          paragraphTextImgColor="#ff4930"
          :imgDuoImageRight="stepImg2Right"
          :imgDuoImageLeft="stepImg2Left"
        />
      </div>
      <div class="specific-step-container">
        <stepTextLeftImgRight
          id="serviceStepThree"
          paragraphTextImgTitle="3. Enclencher la TV de la régie"
          paragraphTextImg="<span class='bold-large'>3.1</span> Dans la régie, allumez la télévision à l'aide de la télécommande.

          <span class='bold-large'>3.2</span> Sélectionnez l'entrée HDMI 2 sur la télévision."
          :paragraphTextImgImage="stepImg3"
        />
      </div>
      <div class="specific-step-container no-margin">
        <stepTextLeftImgRight
          id="serviceStepFour"
          paragraphTextImgTitle="4. Enclencher la TV de la cabine"
          paragraphTextImg="<span class='bold-large'>4.1</span> Allumez la TV avec le bouton stand-by qui se trouve sur le côté droit de l’écran."
          :paragraphTextImgImage="stepImg4"
        />
      </div>
    </div>
    <div class="step-container">
      <h3 class="title-step-container" id="serviceTitleTwo">Informatique</h3>
      <div class="specific-step-container">
        <stepTextContent
          id="serviceStepFive"
          paragraphTextContentTitle="5 Mise en service de l’ordinateur et lancement de logic"
          paragraphTextContent="<span class='bold-large'>5.1</span> Connectez-vous sur le compte qui vous est destiné en utilisant le mot de passe qui vous a été communiqué.
        
          <span class='bold-large'>5.2</span> Pour les élèves de eikon, demandez le mot de passe au secrétariat ou à votre responsable.
          
          <span class='bold-large'>5.3</span> Pour les coopérateurs, adressez-vous à un responsable technique.
         
          <span class='bold-large'>5.4</span> Lancez l'application Logic Audio."
          :showTextWarning="true"
          textWarning="Allumer la TV pour pouvoir accéder au login du Mac !"
        />
      </div>
      <div class="specific-step-container">
        <stepTextUpImgDown
          id="serviceStepSix"
          paragraphTextImgTitle="6. Chargement de la session
        template enregistrement” et création de la session de travail"
          paragraphTextImg="<span class='bold-large'>6.1</span> Pour une séance d’enregistrement, à l'écran de
        démarrage, sélectionnez : “Créer un nouveau projet en utilisant le modèle par défaut ’Template enregistrement’ ”"
          :paragraphTextImgImage="stepImg6"
        />
        <p class="paragraph-padding">
          Dans Logic, effectuez les opérations suivantes : <br />
          <br />
          <span class="bold-large">6.2</span> Allez dans “Fichier/Files” et
          sélectionnez “Enregistrer sous…/Save as”
          <br />
          <br />
          <span class="bold-large">6.3</span> Nommez votre projet et
          enregistrez-le sur le bureau. Assurez-vous de sélectionner l'option
          “Fichiers audio/Audio files” dans “Copier les fichiers suivants dans
          votre projet/Copy the following files into your project”.
        </p>
        <div class="img-container">
          <img
            class="img-layout"
            src="@/assets/img/tutorial-img-service-6-3.webp"
            alt=""
          />
        </div>
      </div>
      <div class="specific-step-container no-margin">
        <stepTextContent
          id="serviceStepSeven"
          paragraphTextContentTitle="7. Mise en service de l’ordinateur lancement de logic"
          paragraphTextContent="<span class='bold-large'>7.1</span> Câblage des sorties Horus

          1 : L
          2 : R
          3 : C
          4 : LFE
          5 : Ls
          6 : RS
          7 : Préamp casque L 
          8 : Préamp casque R

          7 Câblage des entrées Horus

          1 à 8 : Régie Talk back par défaut sur 8

          9 à 16 : Cabine"
          :showTextWarning="true"
          textWarning="Niveau de sortie monitoring conseillé pour la régie et pour le préamplificateur casque :
          - 20dB"
        />
      </div>
    </div>

    <tutorialCarousel
      backgroundService="#191919"
      nextPageUrl="/tutoUse"
      previousPageUrl="/tutoInstallation"
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
    <img src="@/assets/img/background-service.webp" alt="" />
  </div>
</template>

<style scoped></style>
