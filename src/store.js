import { reactive } from 'vue'
export const store = reactive({
    searchText: "",
    movies: [],
    series: [],
    flags: [
        {
            flagList: ['it', 'en', 'es', 'ja'],
            it: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
            en: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg',
            es: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
            ja: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg'
        },
    ]
}); 