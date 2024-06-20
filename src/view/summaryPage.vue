<script>
import hoverUnderline from "@/components/hoverUnderline.vue";
import hoverUnderlineh4 from "@/components/hoverUnderlineh4.vue";
import hoverUnderlineh5 from "@/components/hoverUnderlineh5.vue";

export default {
  components: {
    hoverUnderline,
    hoverUnderlineh4,
    hoverUnderlineh5,
  },
};
</script>

<template>
  <div class="summary-all-tutorial-container">
    <div class="summary-tutorial-container">
      <img
        src="../assets/img/tutorial-icon-installation.svg"
        alt="Icone d'installation"
      />
      <hoverUnderlineh4 navBarText="1. Installation" navBar="" />
      <div class="summary-list">
        <hoverUnderline navBarText="1. Branchement des micros" navBar="" />
        <hoverUnderline navBarText="2. Branchement des casques" navBar="" />
        <hoverUnderline navBarText="3. Branchement du talk back" navBar="" />
      </div>
    </div>

    <div class="summary-tutorial-container">
      <img
        src="../assets/img/tutorial-icon-service.svg"
        alt="Icone d'installation"
      />
      <hoverUnderlineh4 navBarText="2. Mise en service" navBar="" />
      <div class="summary-list">
        <hoverUnderlineh5 navBarText="Matériel" navBar="" />
        <hoverUnderline navBarText="1. Alimentation électrique" navBar="" />
        <hoverUnderline
          navBarText="2. Mise en service Horus et Mac"
          navBar=""
        />
        <hoverUnderline navBarText="3. Écrans TV de la régie" navBar="" />
        <hoverUnderline navBarText="4. Écran TV de la cabine" navBar="" />
      </div>
      <div class="summary-list">
        <hoverUnderlineh5 navBarText="Informatique" navBar="" />
        <hoverUnderline
          navBarText="5. Mise en service de l’ordinateur et lancement de logic"
          navBar=""
        />
        <hoverUnderline
          navBarText="6. Chargement de la session template enregistrement"
          navBar=""
        />
        <hoverUnderline
          navBarText="7. Création d’une session ou importation d’une session"
          navBar=""
        />
      </div>
    </div>

    <div class="summary-tutorial-container">
      <img
        src="../assets/img/tutorial-icon-monitoring.svg"
        alt="Icone du monitoring vidéo"
      />
      <hoverUnderlineh4
        navBarText="2. Utilisation du monitoring vidéo"
        navBar=""
      />
      <div class="summary-list">
        <hoverUnderline navBarText="1.1 Retarder le monitoring" navBar="" />
        <hoverUnderline navBarText="1.2 Ajouter le plugin" navBar="" />
      </div>
    </div>

    <div class="summary-tutorial-container">
      <img
        src="../assets/img/tutorial-icon-settings.svg"
        alt="Icone de réglages"
      />
      <hoverUnderlineh4 navBarText="4. Réglages" navBar="" />
      <div class="summary-list">
        <hoverUnderline navBarText="1. Réglage du micro" navBar="" />
        <hoverUnderline
          navBarText="2. Réglage du monitoring et des casques"
          navBar=""
        />
        <hoverUnderline navBarText="3. Fonctionnement du talkback" navBar="" />
        <hoverUnderline navBarText="4. Enregistrement" navBar="" />
      </div>
    </div>

    <div class="summary-tutorial-container">
      <img
        src="../assets/img/tutorial-icon-export.svg"
        alt="Icone de réglages"
      />
      <hoverUnderlineh4 navBarText="5. Exportation des données" navBar="" />
      <div class="summary-list">
        <hoverUnderline navBarText="1.1 Réglage du micro" navBar="" />

        <hoverUnderline
          navBarText="1.2 Réglage du monitoring et des casques"
          navBar=""
        />
        <hoverUnderline navBarText="1.2 Fonctionnement du talkback" navBar="" />
      </div>
    </div>

    <div class="summary-tutorial-container">
      <img
        src="../assets/img/tutorial-icon-end.svg"
        alt="Icone de fin de séance"
      />
      <hoverUnderlineh4 navBarText="6. Fin de séance" navBar="" />
      <div class="summary-list">
        <hoverUnderline navBarText="1.1 Éteindre Horus " navBar="" />
        <hoverUnderline navBarText="1.2 Éteindre le mac et ranger" navBar="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.summary-all-tutorial-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  img {
    width: 100px;
    height: 100px;
  }

  .summary-tutorial-container {
    width: 360px;
    padding-top: 20vh;
    margin-right: 4vw;
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
</style>
