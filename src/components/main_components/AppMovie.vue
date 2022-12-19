<script >
export default {
    name: "AppMovie",
    props: {
        details: Object
    }
}
</script>

<template>
    <!-- card -->
    <div class="movie">
        <img :src="`https://image.tmdb.org/t/p/w342/${details.poster_path}`" alt="">

        <h3 v-if="details.media_type = 'tv'">{{ details.name }}</h3>
        <h3>{{ details.title }}</h3>

        <h4 class="text" v-if="details.media_type = 'tv'">{{ details.original_name }}</h4>
        <h4 class="text">{{ details.original_title }}</h4>

        <div class="text">{{ details.original_language }}</div>
        <div class="text">{{ details.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as*;

.movie {
    width: calc(100% / 3 - 40px);
    margin: 0 20px;
    margin-bottom: 30px;
    text-align: center;

    .text {
        margin-bottom: 5px;
    }
}
</style>
