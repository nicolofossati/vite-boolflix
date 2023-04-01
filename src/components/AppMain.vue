<template>
    {{ store.searchText }}
    <div class="movieCard-wrapper" v-for="movie in store.movies">
        <AppCardMovie :title="movie.title" :original_title="movie.original_title"
            :original_language="movie.original_language" :vote_average="movie.vote_average" />
    </div>
</template>

<script>
import { store } from '../store.js';

import AppCardMovie from './AppCardMovie.vue';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppCardMovie
    }
}
</script>

<style scoped lang="scss"></style>