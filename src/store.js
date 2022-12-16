import { reactive } from 'vue';

export const store = reactive({
    moviesList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=d062f88af658b49354d9c0433c192c04",
    apiQuery: "query",
    query: "",
})