import { reactive } from 'vue'
export const store = reactive({
    searchText: "",
    movies: [],
    series: [],
    genreMovieList: [],
    genreSerieList: [],
    flagList: ['it', 'en', 'es', 'ja']
}); 