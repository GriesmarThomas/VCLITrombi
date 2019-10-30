<template>
<div>
    <p>{{ FirstName }} {{ LastName }} </p>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
export default class TrombiGuy extends Vue {
        @Prop()
        Id: string;

        @Prop()
        FirstName: string;

        @Prop()
        LastName: string;
}
</script>

<style scoped>
</style>
