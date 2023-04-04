<template>
    <div class="header-container">
        <div class="header-content">
            <div class="logo-nav-bar">
                <img class="logo"
                    src="https://png2.cleanpng.com/sh/586a7aaadc29119a887acdf6cbb8f2fd/L0KzQYm3V8AzN5poepH0aYP2gLBuTf5mfJdxgeo2dHXvdcfwkBlwdl54gNHCLYP3grbojflvb15yfdZyYT3peb30Tf5mfJdxgeo2bHBqf368gsNiOGQ3e6M6MUCzRnAAWcM2PmYAUaMAM0C4Qom8VcYxPmoARuJ3Zx==/kisspng-netflix-television-show-streaming-media-film-netflix-logo-5b3a032c111006.7935659915305285560699.png"
                    alt="">
                <ul class="nav-bar">
                    <li>Home</li>
                    <li>Serie TV</li>
                    <li>Film</li>
                    <li>Originali</li>
                    <li>Aggiunti di recente</li>
                    <li>La mia lista</li>
                </ul>
            </div>
            <div class="search-bar">
                <button @click="$emit('performSearch')" class="search-button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input class="search-input" placeholder="Search" type="text" v-model="store.searchText"
                    @keyup.enter="$emit('performSearch')">
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
    }
}
</script>

<style scoped lang="scss">
.header-container {
    background-color: #1b1b1b;

    .header-content {
        height: 70px;
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;


        .logo-nav-bar {
            display: flex;
            align-items: center;

            .logo {
                height: 70px;
                padding-right: 15px;
            }

            .nav-bar {
                list-style: none;
                display: flex;

                li {
                    color: white;
                    padding-right: 15px;
                }
            }
        }

    }

    span {
        color: white;
    }
}

.search-button,
.search-input {
    border: none;
    padding-right: 10px;
    background-color: #1b1b1b;
    color: white;
}
</style>