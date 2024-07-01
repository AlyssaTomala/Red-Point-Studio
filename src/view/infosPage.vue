<script>
import infosNavigation from "@/components/caseTopNavPrivate.vue";
import infosFooter from "@/components/caseFooterPrivate.vue";

import infosContentBox from "@/components/paragraphTextImg.vue";
import infosContentBoxImg from "@/assets/img/infos-img-schema.webp";
import infosTextTrio from "@/components/boxTextTrio.vue";
import infosTextTrioContent from "@/components/boxTextTrioContent.vue";
import infosText from "@/components/boxTextOnly.vue";

export default {
  components: {
    infosNavigation,
    infosFooter,
    infosContentBox,
    infosTextTrio,
    infosTextTrioContent,
    infosText,
  },
  data() {
    return {
      infosContentBoxImg: infosContentBoxImg,
    };
  },
};
</script>

<template>
  <infosNavigation />
  <infosContentBox
    paragraphTextImgTitle="Accès extérieur"
    paragraphTextImg="Route de la Fonderie 8c, 1700, Fribourg.

    Arrêt de bus Charmettes Lignes 1, 3, 8, 9.
  
    1 place de parc “Red Point Studio” à droite des boîtes aux lettres"
    buttonTextImg="Voir les trajets CFF"
    hoverButtonA="https://www.sbb.ch/fr?date=%222024-05-02%22&moment=%22DEPARTURE%22&stops=%5B%7B%22type%22:%22COORDINATES%22,%22label%22:%22Position%20actuelle%22,%22value%22:%22%5B7.096441064598848,46.82222556442361%5D%22%7D,%7B%22value%22:%22A%3D2@O%3D1700%20Fribourg,%20Route%20de%20la%20Fonderie%208c@H%3D8c@X%3D7153211@Y%3D46794454@U%3D103@L%3D990026447@B%3D1@p%3D1719223382@%22,%22type%22:%22ID%22,%22label%22:%221700%20Fribourg,%20Route%20de%20la%20Fonderie%208c%22%7D%5D&time=%2210:52%22"
    paragraphTextImgMap="true"
    paragraphTextImgMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.565275196421!2d7.151004715963133!3d46.806477279139536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e5bfe8055d7a5%3A0x8dca5d6f5a8b7654!2sRoute%20de%20la%20Fonderie%208%2C%201700%20Fribourg%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1620067674396!5m2!1sen!2sus"
  />
  <infosContentBox
    paragraphTextImgTitle="Accès intérieur"
    paragraphTextImg="Ouverture de la serrure électronique :
    Coopérateurs : adressez-vous à Florian ou Mitch
    eikon : adressez-vous à votre responsable ou au secrétariat"
    paragraphTextImgThird="eikon : adressez-vous à votre responsable ou au secrétariat."
    buttonTextImg=""
    paragraphTextImgMap="false"
    :paragraphTextImgImage="infosContentBoxImg"
    imageBoxShadow="0px 4px 15px 0px rgba(0, 0, 0, 0)"
  />
  <div>
    <infosTextTrio>
      <template v-slot:header>Membres du Comité</template>
      <infosTextTrioContent contactLink="mailto:info@audibiltiy.ch">
        <template v-slot:title>Florian Pittet</template>
        <template v-slot:firstText
          >Président de la société coopérative</template
        >
        <template v-slot:secondText>Responsable Technique</template>

        <template v-slot:contact>info@audibiltiy.ch</template>
        <template v-slot:phoneNumber>+41 79 631 28 70</template>
      </infosTextTrioContent>
      <infosTextTrioContent contactLink="mailto:mitch@littlestudio.ch">
        <template v-slot:title>Mitch Curty</template>
        <template v-slot:firstText>Vice-président</template>
        <template v-slot:contact>mitch@littlestudio.ch</template>
      </infosTextTrioContent>
      <infosTextTrioContent contactLink="mailto:mikael.duerrmeier@smemmusic.ch">
        <template v-slot:title>Mikael Dürmeier</template>
        <template v-slot:firstText>Secrétaire</template>
        <template v-slot:contact>mikael.duerrmeier@smemmusic.ch</template>
      </infosTextTrioContent>
    </infosTextTrio>
  </div>
  <div class="infos-broken-case-container">
    <h3>Dommage Matériel</h3>
    <infosText
      boxTextOnlyContent="Nous sommes assurés. Afin que le studio soit utilisable 
  par ceux qui viennent après vous, signalez immédiatement tout dommage au 
  responsable technique."
    />
  </div>
  <infosFooter />
  <div class="background-container">
    <img src="@/assets/img/background-infos.webp" alt="" />
  </div>
</template>

<style scoped>
.infos-broken-case-container {
  padding-top: 10vh;
}
</style>
