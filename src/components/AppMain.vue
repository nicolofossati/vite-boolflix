<template>
    <h1 v-if="store.movies.length > 0">Movies</h1>
    <div class="movieCard-wrapper" v-for="movie in store.movies">
        <AppCardMovie :title="movie.title" :original_title="movie.original_title"
            :original_language="movie.original_language" :vote_average="movie.vote_average" :poster_path="
                store.imgPrefix + movie.poster_path" />
    </div>

    <h1 v-if="store.series.length > 0">Series</h1>
    <div class="serieCard-wrapper" v-for="serie in store.series">
        <AppCardSerie :name="serie.name" :original_name="serie.original_name" :original_language="serie.original_language"
            :vote_average="serie.vote_average" />
    </div>
</template>

<script>
import { store } from '../store.js';

import AppCardMovie from './AppCardMovie.vue';
import AppCardSerie from './AppCardSerie.vue';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppCardMovie, AppCardSerie
    }
}
</script>

<style scoped lang="scss"></style>