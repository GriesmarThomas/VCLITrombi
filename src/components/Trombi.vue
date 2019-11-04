<template>
<div class="trombiGuy">
    <div class="pictureTrombi">
        <img v-bind:src="PicturePath" alt="photo du monsieur" />
    </div>
    <div>
        <p>{{ FirstName }} {{ LastName }} </p>
        <p>{{ Skills }}</p>
        <p>{{ Motto }}</p>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
export default class TrombiGuy extends Vue {
        @Prop()
        Id: string;

        @Prop()
        PicturePath: string

        @Prop()
        FirstName: string;

        @Prop()
        LastName: string;

        @Prop()
        Skills: string;

        @Prop()
        Motto: string;

        @Prop()
        Category: number;

        get GetPicturePath() {
          return '/assets/trombiThumbs/' + this.PicturePath;
        }
}
</script>

<style scoped>
.trombiGuy {
    border: 1px solid black;
    margin:5px;
    padding:5px;
    float:left;
}
.pictureTrombi {
    float:left;
}

.pictureTrombi img {
    max-width:150px;
}
</style>
