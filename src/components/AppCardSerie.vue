<template>
    <div class="carta-temporanea">
        <h1>{{ name }}</h1>
        <h2>{{ original_name }}</h2>
        <img v-if="store.flags[0].flagList.includes(original_language)" :src="flag(original_language)">
        <h3 v-else>{{ original_language }}</h3>
        <h4>{{ vote_average }}</h4>
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
        name: String,
        original_name: String,
        original_language: String,
        vote_average: String
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
.carta-temporanea {
    width: calc(100%/5);
    text-align: center;
    background-color: aliceblue;
    border: 1px solid black;

    img {
        width: 100px;
        height: 65px;
    }
}
</style>