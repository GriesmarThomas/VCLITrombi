<template>
<div>
    <p><input type='text' id='searchInput' v-model="searchInputValue" /></p>
    <!-- <div v-for:myList v-bind="Search" >
    </div> -->
    <myTrombiGuy v-for="trombiGuy in getSearchResult(searchInputValue)" :key="trombiGuy.Id" v-bind="trombiGuy" />
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import TrombiGuy from './Trombi.vue';

export default Vue.extend({

    name: 'Search' as string,
    components: {
        myTrombiGuy: TrombiGuy,
    },
    data() {
        return {
            initialTrombiGuys: {} as TrombiGuy[],
            TrombiResult: {} as TrombiGuy,
            searchInputValue: 'type some text here...',
            myList: [
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
            ],
        };
    },
    computed: {
        myTitle(): string {
            return '${this.TrombiResult.FirstName} ${this.TrombiResult.LastName} c\'est son nom !';
        },
    },
    methods: {
        getSearchResult(search:string): object[] {
            search = search.toLowerCase();
            return this.myList.filter(machin => machin.FirstName.toLowerCase().startsWith(search)
            || machin.LastName.toLowerCase().startsWith(search)
            || machin.Skills.toLowerCase().startsWith(search)
            || machin.Motto.toLowerCase().startsWith(search));
        },
    },
});
</script>

<style scoped>
</style>
