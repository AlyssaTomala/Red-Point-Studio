<script>
import navigationBar from "@/components/navigationBar.vue";
import cardsMaterial from "@/components/cardsMaterial.vue";
import coopSection from "@/components/coopSection.vue";
import studioSection from "@/components/studioSection.vue";
import doubleParagraph from "@/components/paragraphDouble.vue";
import tutorialContainer from "@/components/tutorialContainer.vue";

export default {
  components: {
    navigationBar,
    cardsMaterial,
    coopSection,
    studioSection,
    doubleParagraph,
    tutorialContainer,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <navigationBar />
  <div class="slay"></div>
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
  <tutorialContainer
    h3Tutorial="Installation"
    textTutorial="Marche à suivre du branchement d’un micro et
  d’un casque ainsi que l’enregistrement des voix ou des bruitages dans Logic
  Audio."
    buttonTextTutorial="Voir le tutoriel"
  />

  <tutorialContainer
    class="right-tutorial-container"
    h3Tutorial="Mise en service"
    textTutorial="Tutoriel pour l’alimentation électrique et la mise en marche des machines."
    buttonTextTutorial="Voir le tutoriel"
  />

  <div class="slay"></div>
</template>

<style scoped>
.slay {
  height: 100vh;
  background-color: #191919;
}

.right-tutorial-container {
  flex-direction: row-reverse;
}
</style>
