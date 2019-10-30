<template>
  <div class="trombi">
      <p>Ceci est la page contenant toutes nos personnes enregistrées.</p>
      <TrombiGuy v-for="trombiGuy in trombiGuys" :key="trombiGuy.Id" :LastName="trombiGuy.LastName" :FirstName="trombiGuy.LastName" />
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
      FirstName: 'Jean-Michel',
      LastName: 'Aulas',
    },
    {
      Id: '2',
      FirstName: 'Philippe',
      LastName: 'Risoli',
    },
  ];

  get visibleTrombiGuys() {
    return this.trombiGuys;
  }
}
</script>
