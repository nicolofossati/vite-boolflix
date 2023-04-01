<template>
  <AppHeader @performSearch="callToApi" />
  <AppMain />
  <span></span>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store.js';
import axios from 'axios';

export default {
  components: {
    AppMain, AppHeader
  },
  data() {
    return {
      store
    }
  },
  methods: {
    callToApi() {
      let query = this.translate_input_to_query(store.searchText);
      let url = `https://api.themoviedb.org/3/search/movie?api_key=9a1a3a5b6cd69e0236098223b802cbfb&query=${query}`;
      axios.get(url)
        .then(response => {
          this.store.movies = response.data.results;
          console.log(this.store.movies);
        });
    },
    translate_input_to_query(input) {
      return input.trim().replace(' ', '+');
    }
  }
}


</script>



<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
