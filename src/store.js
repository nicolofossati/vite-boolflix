import { reactive } from 'vue'
export const store = reactive({
    searchText: "",
    movies: [],
    series: [],
    currentCast: [],
    flagList: ['it', 'en', 'es', 'ja']
}); 