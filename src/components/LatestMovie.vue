<template>
    <div>
        <div v-for="(item, index) in wholeResponse" :key="index" mb-2>
            <img :src="item.Poster" aspect-ratio="1" />
            <div>
                <h2>{{item.Title}}</h2>
                <div>Year: {{item.Year}}</div>
                <div>Type: {{item.Type}}</div>
                <div>IMDB-id: {{item.imdbID}}</div>
            </div>
        </div>
    </div>
</template>

<script type="ts">
import axios from 'axios';

export default {
    data() {
        return {
            wholeResponse: [],
            loading: true,
        };
    },
    mounted() {
    axios
        .get('http://www.omdbapi.com/?s=mummy&apikey=b76b385c&page=1&type=movie&Content-Type=application/json%27')
        .then(response => {
        this.wholeResponse = response.data.Search;
        })
        .catch(error => {
        console.log(error);
        });
  },
};
</script>

<style scoped>

</style>
