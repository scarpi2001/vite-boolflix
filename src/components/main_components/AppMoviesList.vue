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
    <div class="movies_box">
        <AppMovie v-for="movie in store.moviesList" :key="movie.id" :details="movie" />
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as*;

.movies_box {
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;
}
</style>
