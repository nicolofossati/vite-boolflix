<template>
    <div class="card">
        <img class="movie-poster" :src="poster_path">
        <div class="movie-info">
            <h1>{{ title }}</h1>
            <h2>{{ original_title }}</h2>
            <img class="flag" v-if="store.flags[0].flagList.includes(original_language)" :src="flag(original_language)">
            <h3 v-else>{{ original_language }}</h3>
            <div class="star-vote">
                <span v-for="n in 5">
                    <i class="fa-solid fa-star" v-if="n <= Math.ceil(vote_average / 2)"></i>
                    <i class="fa-regular fa-star" v-else></i>
                </span>
            </div>
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
        title: String,
        original_title: String,
        original_language: String,
        vote_average: String,
        poster_path: String,
        index: Number

    }, methods: {
        flag(language) {
            let flag = "";
            if (language == 'it') {
                flag = store.flags[0].it;
            } else if (language == 'en') {
                flag = store.flags[0].en;
            } else if (language == 'es') {
                flag = store.flags[0].es;
            } else if (language == 'ja') {
                flag = store.flags[0].ja; //
            }
            return flag;
        }
    }
}

</script>

<style lang="scss" scoped>
.card {
    width: calc(100%/4 - 40px);
    margin: 10px 20px;
    text-align: center;
    background-color: aliceblue;
    border: 1px solid black;
    display: flex;

    .movie-info {
        display: none;
    }

    .movie-poster {
        width: 100%;

    }

    .flag {
        width: 100px;
        height: 65px;
    }
}

.card:hover {
    .movie-info {
        display: block;
    }

    .movie-poster {
        display: none;
    }
}
</style>