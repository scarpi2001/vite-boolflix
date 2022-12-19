<script >
export default {
    name: "AppMovie",
    props: {
        details: Object
    },
    // data() {
    //     return {
    //         flags: [
    //             {
    //                 img: "../../assets/img/gb.svg",
    //                 lang: "en"
    //             },
    //         ]
    //     }
    // },
    // computed: {
    //     getFlags() {
    //         for (let i = 0; i < this.flags.length; i++) {
    //             if (this.flags[i].lang.includes(this.details.original_language)) {
    //                 return this.flags[i].img
    //             }

    //         }
    //     }
    // }
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

        <div class="text">
            <img v-if="details.original_language === 'en'" src="../../assets/img/gb.svg" alt="">
            <img v-else-if="details.original_language === 'it'" src="../../assets/img/it.svg" alt="">
            <img v-else-if="details.original_language === 'fr'" src="../../assets/img/fr.svg" alt="">
            <img v-else src="../../assets/img/unknown.svg" alt="">
        </div>
        <div class="text">{{ details.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as*;

.movie {
    width: calc(100% / 3 - 40px);
    margin: 0 20px;
    margin-bottom: 30px;

    .text {
        margin-bottom: 5px;

        img {
            width: 40px;
        }
    }
}
</style>
