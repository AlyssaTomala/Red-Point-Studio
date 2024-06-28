<script></script>
<script>
import summaryNavigation from "@/components/caseTopNavPrivate.vue";
import hoverUnderline from "@/components/hoverUnderlineP.vue";
import hoverUnderlineh4 from "@/components/hoverUnderlineH4.vue";
import hoverUnderlineh5 from "@/components/hoverUnderlineH5.vue";
import SummaryFooter from "@/components/caseFooterPrivate.vue";

export default {
  components: {
    summaryNavigation,
    hoverUnderline,
    hoverUnderlineh4,
    hoverUnderlineh5,
    SummaryFooter,
  },
};
</script>

<template>
  <summaryNavigation />
  <div class="summary-all-tutorial-container">
    <div class="summary-first-half-tutorial-container">
      <div class="summary-tutorial-container">
        <img
          src="../assets/img/tutorial-icon-installation.svg"
          alt="Icone d'installation"
        />
        <hoverUnderlineh4
          navBarText="1. Installation"
          navBarUrl="/tutoInstallation"
        />
        <div class="summary-list">
          <hoverUnderline
            navBarText="1. Branchement des micros"
            navBarUrl="/tutoInstallation#installStepOne"
          />
          <hoverUnderline
            navBarText="2. Branchement des casques"
            navBarUrl="/tutoInstallation#installStepTwo"
          />
          <hoverUnderline
            navBarText="3. Branchement du talk back"
            navBarUrl="/tutoInstallation#installStepThree"
          />
        </div>
      </div>

      <div class="summary-tutorial-container">
        <img
          src="../assets/img/tutorial-icon-service.svg"
          alt="Icone d'installation"
        />
        <hoverUnderlineh4
          navBarText="2. Mise en service"
          navBarUrl="/tutoService"
        />
        <div class="summary-list">
          <hoverUnderlineh5
            navBarText="Matériel"
            navBarUrl="/tutoService#serviceTitleOne"
          />
          <hoverUnderline
            navBarText="1. Alimentation électrique"
            navBarUrl="/tutoService#serviceStepOne"
          />
          <hoverUnderline
            navBarText="2. Mise en service Horus et Mac"
            navBarUrl="/tutoService#serviceStepTwo"
          />
          <hoverUnderline
            navBarText="3. Écrans TV de la régie"
            navBarUrl="/tutoService#serviceStepThree"
          />
          <hoverUnderline
            navBarText="4. Écran TV de la cabine"
            navBarUrl="/tutoService#serviceStepFour"
          />
        </div>
        <div class="summary-list">
          <hoverUnderlineh5
            navBarText="Informatique"
            navBarUrl="/tutoService#serviceTitleTwo"
          />
          <hoverUnderline
            navBarText="5. Mise en service de l’ordinateur et lancement de logic"
            navBarUrl="/tutoService#serviceStepFive"
          />
          <hoverUnderline
            navBarText="6. Chargement de la session template enregistrement"
            navBarUrl="/tutoService#serviceStepSix"
          />
          <hoverUnderline
            navBarText="7. Création d’une session ou importation d’une session"
            navBarUrl="/tutoService#serviceStepSeven"
          />
        </div>
      </div>

      <div class="summary-tutorial-container">
        <img
          src="../assets/img/tutorial-icon-monitoring.svg"
          alt="Icone du monitoring vidéo"
        />
        <hoverUnderlineh4
          navBarText="3. Utilisation du monitoring vidéo"
          navBarUrl="/tutoUse"
        />
        <div class="summary-list">
          <hoverUnderline
            navBarText="1.1 Retarder le monitoring"
            navBarUrl="/tutoUse#useStepOne"
          />
          <hoverUnderline
            navBarText="1.2 Ajouter le plugin"
            navBarUrl="/tutoUse#useStepOne"
          />
        </div>
      </div>
    </div>
    <div class="summary-second-half-tutorial-container">
      <div class="summary-tutorial-container">
        <img
          src="../assets/img/tutorial-icon-settings.svg"
          alt="Icone de réglages"
        />
        <hoverUnderlineh4 navBarText="4. Réglages" navBarUrl="/tutoSettings" />
        <div class="summary-list">
          <hoverUnderline
            navBarText="1. Réglage du micro"
            navBarUrl="/tutoSettings#settingsStepOne"
          />
          <hoverUnderline
            navBarText="2. Réglage du monitoring et des casques"
            navBarUrl="/tutoSettings#settingsStepTwo"
          />
          <hoverUnderline
            navBarText="3. Fonctionnement du talkback"
            navBarUrl="/tutoSettings#settingsStepThree"
          />
          <hoverUnderline
            navBarText="4. Enregistrement"
            navBarUrl="
          /tutoSettings#settingsStepFour"
          />
        </div>
      </div>

      <div class="summary-tutorial-container">
        <img
          src="../assets/img/tutorial-icon-export.svg"
          alt="Icone de réglages"
        />
        <hoverUnderlineh4
          navBarText="5. Exportation des données"
          navBarUrl="/tutoExport"
        />
        <div class="summary-list">
          <hoverUnderline
            navBarText="1.1 Enregistrer et quitter"
            navBarUrl="/tutoExport#exportStepOne"
          />

          <hoverUnderline
            navBarText="1.2 Vérfication"
            navBarUrl="/tutoExport#exportStepOne"
          />
          <hoverUnderline
            navBarText="1.3 Supprimer"
            navBarUrl="/tutoExport#exportStepOne"
          />
        </div>
      </div>

      <div class="summary-tutorial-container">
        <img
          src="../assets/img/tutorial-icon-end.svg"
          alt="Icone de fin de séance"
        />
        <hoverUnderlineh4
          navBarText="6. Fin de séance"
          navBarUrl="/tutoEnding"
        />
        <div class="summary-list">
          <hoverUnderline
            navBarText="1.1 Éteindre Horus "
            navBarUrl="/tutoEnding#endingStepOne"
          />
          <hoverUnderline
            navBarText="1.2 Éteindre le mac et ranger"
            navBarUrl="/tutoEnding#endingStepTwo"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="background-container">
    <img src="@/assets/img/background-summary.webp" alt="" />
  </div>
  <summaryFooter />
</template>

<style scoped>
.summary-all-tutorial-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 10vh;

  img {
    width: 100px;
    height: 100px;
  }
  .summary-tutorial-container {
    width: 60%;
    padding-bottom: 2vh;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    .summary-list {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
  }
}

.summary-first-half-tutorial-container,
.summary-second-half-tutorial-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
