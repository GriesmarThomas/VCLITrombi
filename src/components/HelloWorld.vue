<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>
      <TrombiGuy v-for="trombiGuy in Persons" :TrombiGuy="trombiGuy" v-bind:key="trombiGuy.Id"></TrombiGuy>
    </p> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TrombiGuy from './Trombi.vue';

@Component({
  components: {
    // HelloWorld,
  },
})
export default class HelloWorld extends Vue {
  @Prop({ required: true })
  msg = 'Coucou toi !';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
