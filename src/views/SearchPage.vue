<template>
  <div class="search">
    <img alt="Vue logo" src="../assets/logo.png">
    <my-search-component></my-search-component>
  </div>
</template>

<script type="ts">
import Vue from 'vue';
import Search from '../components/Search.vue';

export default Vue.extend({
    // name: 'Search' as Search,
    // data() {
    //     return {
    //       mySearchComponent: Search,
    //     };
    // },
    components: {
      mySearchComponent: Search,
    },
    computed: {
    },
});
</script>
