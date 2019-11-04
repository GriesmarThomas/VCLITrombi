<template>
  <div class="trombi">
      <p>Ceci est la page contenant toutes nos personnes enregistrées.</p>
      <div class="trombi-container">
        <h2>Trombi des gugus créés à la mano</h2>
        <div>
          <select name="TrombiCategories" v-model="TrombiCategory" v-on:change="categoryChange">
            <option value="1">Catégorie 1</option>
            <option value="2">Catégorie 2</option>
            <option value="3">Catégorie 3</option>
          </select>
        </div>
        <TrombiGuy v-for="trombiGuy in trombiGuys" :key="trombiGuy.Id" v-bind="trombiGuy" />
      </div>
      <div class="trombi-container">
      <h2>Trombi des gugus chopés par API : </h2>
      <TrombiGuy v-for="trombiGuy in getTrombiguysFromAPI()" :key="trombiGuy.Id" v-bind="trombiGuy" />
      </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';

import axios from 'axios';
import TrombiGuy from '../components/Trombi.vue';

@Component({
  components: {
    TrombiGuy,
  },
})
export default class TrombiPage extends Vue {
  @Prop()
  private initialTrombiGuys = [
    {
      Id: '1',
      PicturePath: require('../assets/trombiThumbs/aulas.jpg'),
      FirstName: 'Jean-Michel',
      LastName: 'Aulas',
      Skills: 'CEO',
      Motto: 'Penalty pour Lyon ! J\'aime les sushis.',
      Category: 1,
    },
    {
      Id: '2',
      PicturePath: require('../assets/trombiThumbs/risoli.jpg'),
      FirstName: 'Philippe',
      LastName: 'Risoli',
      Skills: 'Présentateur télévision',
      Motto: 'Et c\'est le milliooooooooon !!! ',
      Category: 2,
    },
    {
      Id: '3',
      PicturePath: require('../assets/trombiThumbs/patulacci.jpg'),
      FirstName: 'Marcel',
      LastName: 'Patulacci',
      Skills: 'Gardien de la paix',
      Motto: 'Gardien de la paix mais humain avant tout.',
      Category: 3,
    },
  ];

  @Prop()
  private trombiGuys = this.initialTrombiGuys;

  @Prop()
  trombiGuysAPI: TrombiGuy[];

  @Prop()
  TrombiCategory: string;

  get visibleTrombiGuys() {
    return this.trombiGuys;
  }


@Watch('TrombiCategory')
onCategoryChange(val:string) {
  this.trombiGuys = this.initialTrombiGuys.filter(trombi => trombi.Category.toString() === val);
}
// onCategoryChange {
//   this.trombiGuys = this.trombiGuys.filter(trombi => trombi.Category === event.target.value);
// }


  getTrombiguysFromAPI() {
axios.defaults.headers.common = {
      ...axios.defaults.headers.common,
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Content-Type': 'application/json',
   };

    return axios
        .get('https://localhost:44316/api/Trombi/')
        .then(response => {
        this.trombiGuysAPI = response.data.Search;
        })
        .catch(error => {
        console.log(error);
        });
  }
}
</script>

<style scoped>
.trombi-container {
  clear:both;
}
</style>
