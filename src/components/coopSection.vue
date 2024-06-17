<script>
import paragraphLong from "@/components/paragraphLong.vue";

export default {
  components: {
    paragraphLong,
  },
};
</script>
<template>
  <paragraphLong
    longParagraphText="Le Red Point Studio appartient à la société coopérative 
    Audibility. Ses 7 membres actuels sont ingénieurs du son, sound designers, 
    musiciens, réalisateurs ou producteur de cinéma. Chaque membre peut en tout 
    temps utiliser le studio pour ses propres projets à un tarif extrêmement 
    avantageux. N’importe qui peut devenir membre de la Coopérative et devenir 
    utilisateur du Red Point studio. Pour en savoir plus, contactez un des 
    membres du comité."
  />
  <div class="coop-img-border">
    <div class="coop-img-container"></div>
  </div>
</template>

<style>
.coop-img-border {
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36vh;
  width: 100%;
  border: 0.5px solid var(--color-grey-800, #343434);
  background: var(--color-brand-Backgroundblur, rgba(255, 247, 247, 0.08));
  box-shadow: 0px 0px 15.1px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
  border-radius: 10px;
}

.coop-img-container {
  background-image: url("@/assets/img/img-coop-test.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 96%;
  width: 99%;
  border-radius: 8px;
}
</style>
