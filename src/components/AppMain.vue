<template>
    <div class="main-container">
        <div class="main-content">
            <h1 v-if="store.movies.length > 0">Movies</h1>
            <div class="movieCard-wrapper">
                <AppCard :title="movie.title" :original_title="movie.original_title"
                    :original_language="movie.original_language" :vote_average="movie.vote_average" :poster_path="
                        store.imgPrefix + movie.poster_path" :index="index" v-for="(movie, index) in store.movies" />
            </div>

            <h1 v-if="store.series.length > 0">Series</h1>
            <div class="serieCard-wrapper">
                <AppCard :title="serie.name" :original_title="serie.original_name"
                    :original_language="serie.original_language" :vote_average="serie.vote_average" :poster_path="
                        store.imgPrefix + serie.poster_path" v-for="serie in store.series" />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

import AppCard from './AppCard.vue';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppCard
    }
}
</script>

<style scoped lang="scss">
.main-container {
    background-color: grey;
}

.main-content {

    width: 80%;
    margin: auto;
}

.movieCard-wrapper,
.serieCard-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
}
</style>