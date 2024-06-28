<script>
import textContent from "@/components/boxTextOnly.vue";

export default {
  components: {
    textContent,
  },
  props: {
    titleContent: {
      type: String,
      default: "Red Point Studio",
    },
  },
};
</script>
<template>
  <div class="box-img-border">
    <div class="box-img-container"></div>
  </div>
  <h3>{{ titleContent }}</h3>
  <textContent
    boxTextOnlyContent="Le Red Point Studio appartient à la société coopérative 
    Audibility. Ses 7 membres actuels sont ingénieurs du son, sound designers, 
    musiciens, réalisateurs ou producteur de cinéma. Chaque membre peut en tout 
    temps utiliser le studio pour ses propres projets à un tarif extrêmement 
    avantageux. N’importe qui peut devenir membre de la Coopérative et devenir 
    utilisateur du Red Point studio. Pour en savoir plus, contactez un des 
    membres du comité."
  />
</template>

<style scoped>
.box-img-border {
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36vh;
  width: 100%;
  border: 0.5px solid (#343434);
  background-color: #fff3f314;
  box-shadow: 0px 0px 15.1px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
  border-radius: 10px;
}

.box-img-container {
  background-image: url("@/assets/img/homepage-img-studio.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 96%;
  width: 99%;
  border-radius: 8px;
}
</style>
