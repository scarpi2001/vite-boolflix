import { reactive } from 'vue';

export const store = reactive({
    moviesList: [],
    multiApiURL: "https://api.themoviedb.org/3/search/multi?api_key=d062f88af658b49354d9c0433c192c04",
    popularsApiUrl: "https://api.themoviedb.org/3/movie/popular?api_key=d062f88af658b49354d9c0433c192c04",
    query: "",
})