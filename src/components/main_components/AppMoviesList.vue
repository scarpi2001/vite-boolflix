<script >
import AppMovie from './AppMovie.vue';

import { store } from '../../store';

export default {
    name: "AppMoviesList",
    components: {
        AppMovie,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <!-- contenitore movies -->
    <div id="movies_box">
        <AppMovie v-for="movie in store.moviesList" :key="movie.id" :details="movie" />
    </div>
</template>

<style lang="scss" scoped>
#movies_box {
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 80px);
    overflow-y: auto;
    background-color: #434343;
}
</style>
