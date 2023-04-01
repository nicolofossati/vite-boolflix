<template>
    {{ store.searchText }}

    <div class="carta-temporanea" v-for="movie in store.movies">
        <h1>{{ movie.title }}</h1>
        <h2>{{ movie.original_title }}</h2>
        <h3>{{ movie.original_language }}</h3>
        <h4>{{ movie.vote_average }}</h4>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<style scoped lang="scss">
.carta-temporanea {
    width: calc(100%/5);
    text-align: center;
    background-color: aliceblue;
    border: 1px solid black;
}
</style>