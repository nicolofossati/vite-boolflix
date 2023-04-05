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

      let movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=9a1a3a5b6cd69e0236098223b802cbfb&query=${query}`;
      axios.get(movieUrl)
        .then(response => {
          store.movies = response.data.results;
          for (let i = 0; i < store.movies.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${store.movies[i].id}/credits?api_key=9a1a3a5b6cd69e0236098223b802cbfb`)
              .then(response => {
                store.movies[i].cast = response.data.cast;
              });
          }
          console.log(store.movies)
        });


      let serieUrl = `https://api.themoviedb.org/3/search/tv?api_key=9a1a3a5b6cd69e0236098223b802cbfb&query=${query}`;
      axios.get(serieUrl)
        .then(response => {
          this.store.series = response.data.results;
          console.log(this.store.series);
        });
    },
    translate_input_to_query(input) {
      return input.trim().replace(' ', '+');
    }
  },
  created() {
    //genre movie list
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9a1a3a5b6cd69e0236098223b802cbfb')
      .then(response => {
        store.genreMovieList = response.data.genres;
        console.log(store.genreMovieList);
      });

    axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=9a1a3a5b6cd69e0236098223b802cbfb')
      .then(response => {
        store.genreSerieList = response.data.genres;
        console.log(store.genreSerieList);
      });
  }
}


</script>



<style lang="scss">
@use './styles/general.scss';
</style>
