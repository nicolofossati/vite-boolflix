<template>
    <div class="card">
        <img class="movie-poster" v-if="(poster_path != null)" :src="`https://image.tmdb.org/t/p/w342${poster_path}`">
        <div class="without-poster" v-else>
            <i class="fa-solid fa-images"></i>
        </div>
        <div class="movie-info">

            <span class="title">Title: {{ title }}</span>
            <span class="original-title">Original title : {{ original_title }}</span>

            <div class="star-vote">
                <span>Vote: </span>
                <span class="stars" v-for="n in 5" :key="n">
                    <i class="fa-solid fa-star" v-if="n <= Math.ceil(vote_average / 2)"></i>
                    <i class="fa-regular fa-star" v-else></i>
                </span>
            </div>

            <div class="vote">
                <span>Language: </span>
                <img class="flag" v-if="store.flagList.includes(original_language)"
                    :src="getImageUrl(`../img/${original_language}.png`)">
                <h3 v-else>{{ original_language }}</h3>
            </div>

            <div class="cast">
                <span>Cast: </span>
                <ul>
                    <li v-for="(actor, index) in cast_list" :key="index" v-show="index <= 4">{{ actor.name }}</li>
                </ul>
            </div>

            <div class="genre">
                <Span>Genre:</Span>
                <ul>
                    <li v-for="(genre, index) in genres" :key="index">
                        <span v-if="typeCard == 'movie'">{{ getGenreName(genre, store.genreMovieList) }}</span>
                        <span v-else>{{ getGenreName(genre, store.genreSerieList) }}</span>
                    </li>
                </ul>
            </div>

            <span class="overview">Overview: {{ overview }}</span>
        </div>
    </div>
</template>

<script>

import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    props: {
        typeCard: String,
        title: String,
        original_title: String,
        original_language: String,
        vote_average: String,
        poster_path: String,
        overview: String,
        cast_list: Array,
        genres: Array

    }, methods: {
        getImageUrl(path) {
            return new URL(path, import.meta.url).href;
        },
        getGenreName(genre_id, genreList) {
            for (let i = 0; i < genreList.length; i++) {
                if (genreList[i].id == genre_id) {
                    return genreList[i].name;
                }
            }
            return "Genre_Not_Found";
        }
    }
}

</script>

<style lang="scss" scoped>
.card {
    width: calc(100%/4 - 40px);
    aspect-ratio: 1 / 1.5;
    margin: 10px 20px;
    background-color: rgb(40, 40, 40);
    display: flex;
    color: white;

    .movie-info {
        display: none;
        padding: 20px 10px;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        &>* {
            display: block;
            padding-bottom: 10px;
        }

        .title,
        .original-title {
            display: block;
        }
    }

    .movie-poster {
        width: 100%;

    }

    .without-poster {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        i {
            color: white;
            font-size: 100px;
        }
    }

    .flag {
        width: 30px;
    }
}

.card:hover {

    & {
        border: 1px solid rgb(255, 255, 255);
    }

    .movie-info {
        display: block;
    }

    .movie-poster,
    .without-poster {
        display: none;
    }
}

.stars {
    color: #ffbd00;
}

.cast,
.genre {
    padding: 10px 0;

    ul {
        padding-left: 15px;
        list-style-type: circle;
        color: white;
    }
}
</style>