<template>
    <div class="main-container">
        <div class="main-content">
            <h1 class="movie-h1" v-if="store.movies.length > 0">Movies</h1>
            <div class="movieCard-wrapper">
                <AppCard :title="movie.title" :original_title="movie.original_title"
                    :original_language="movie.original_language" :vote_average="movie.vote_average" :poster_path="
                        movie.poster_path" :overview="movie.overview" :cast_list="movie.cast" :genres="movie.genre_ids"
                    v-for="movie in store.movies" />
            </div>
            <!-- callToApiCast(movie.id) -->
            <h1 class="serie-h1" v-if="store.series.length > 0">Series</h1>
            <div class="serieCard-wrapper">
                <AppCard :title="serie.name" :original_title="serie.original_name"
                    :original_language="serie.original_language" :vote_average="serie.vote_average" :poster_path="
                        serie.poster_path" :overview="serie.overview" v-for="serie in store.series" />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios';

import AppCard from './AppCard.vue';

export default {
    data() {
        return {
            store,
        }

    },
    components: {
        AppCard
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
.main-container {
    min-height: calc(100vh - 70px);
    background-color: #1b1b1b;
}

.main-content {
    width: 80%;
    margin: auto;

    h1 {
        color: #8c8c8c;
        padding: 0 20px 20px 20px;
    }

    .serie-h1 {
        padding-top: 50px;
    }
}

.movieCard-wrapper,
.serieCard-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>