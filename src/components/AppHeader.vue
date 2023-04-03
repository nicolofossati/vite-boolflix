<template>
    <div class="header-container">
        <div class="header-content">
            <span>BOOLFLIX</span>
            <div class="search-bar">
                <input type="text" v-model="store.searchText">
                <button @click="$emit('performSearch')">Search</button>
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
    background-color: black;

    .header-content {
        height: 50px;
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        color: white;
    }
}

.search-bar {}
</style>