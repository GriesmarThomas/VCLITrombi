<template>
  <div class="trombi">
      <p>Ceci est la page contenant toutes nos personnes enregistrées.</p>
      <TrombiGuy v-for="trombiGuy in trombiGuys" :key="trombiGuy.Id" v-bind="trombiGuy" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from 'vue-property-decorator';
import TrombiGuy from '../components/Trombi.vue';

@Component({
  components: {
    TrombiGuy,
  },
})
export default class TrombiPage extends Vue {
  @Prop()
  private trombiGuys = [
    {
      Id: '1',
      PicturePath: require('../assets/trombiThumbs/aulas.jpg'),
      FirstName: 'Jean-Michel',
      LastName: 'Aulas',
      Skills: 'CEO',
      Motto: 'Penalty pour Lyon ! J\'aime les sushis.',
    },
    {
      Id: '2',
      PicturePath: require('../assets/trombiThumbs/risoli.jpg'),
      FirstName: 'Philippe',
      LastName: 'Risoli',
      Skills: 'Présentateur télévision',
      Motto: 'Et c\'est le milliooooooooon !!! ',
    },
    {
      Id: '3',
      PicturePath: require('../assets/trombiThumbs/patulacci.jpg'),
      FirstName: 'Marcel',
      LastName: 'Patulacci',
      Skills: 'Gardien de la paix',
      Motto: 'Gardien de la paix mais humain avant tout.',
    },
  ];

  get visibleTrombiGuys() {
    return this.trombiGuys;
  }
}
</script>
