<template>
    <div class="carta-temporanea">
        <h1>{{ name }}</h1>
        <h2>{{ original_name }}</h2>
        <h3>{{ original_language }}</h3>
        <h4>{{ vote_average }}</h4>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    props: {
        name: String,
        original_name: String,
        original_language: String,
        vote_average: String
    }
}
</script>

<style lang="scss" scoped>
.carta-temporanea {
    width: calc(100%/5);
    text-align: center;
    background-color: aliceblue;
    border: 1px solid black;
}
</style>