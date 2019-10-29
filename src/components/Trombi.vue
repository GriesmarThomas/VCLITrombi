<template>
<div>
    <p>{{TrombiGuy.FirstName}} {{TrombiGuy.LastName}} Coin coin</p>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
export default class TrombiGuy extends Vue {
        @Prop()
        Id: string;

        FirstName: string;

        LastName: string;

  // get myComputedName() {
  //     return this.FirstName + ' ' + this.LastName;
  // }

  // displayName() {
  //     return this.FirstName + ' ' + this.LastName;
  // }
}
</script>

<style scoped>
</style>
