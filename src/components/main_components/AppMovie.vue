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
        <!-- locandina -->
        <img :src="`https://image.tmdb.org/t/p/w342/${details.poster_path}`" alt="">

        <!-- titolo -->
        <h3 v-if="details.media_type === 'tv'">Titolo: {{ details.name }}</h3>
        <h3 v-else>Titolo: {{ details.title }}</h3>

        <!-- titolo originale -->
        <h4 class="text" v-if="details.media_type === 'tv'">Titolo originale: {{ details.original_name }}</h4>
        <h4 class="text" v-else>Titolo originale: {{ details.original_title }}</h4>

        <!-- img flag corrispondente alla lingua -->
        <div class="text">
            <img v-if="details.original_language === 'en'" src="../../assets/img/gb.svg" alt="">
            <img v-else-if="details.original_language === 'it'" src="../../assets/img/it.svg" alt="">
            <img v-else-if="details.original_language === 'fr'" src="../../assets/img/fr.svg" alt="">
            <img v-else src="../../assets/img/unknown.svg" alt="">
        </div>

        <!-- voto -->
        <div id="vote">
            <ul>
                <li v-for="element in Math.round(details.vote_average / 2)">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </li>
            </ul>
            <ul>
                <li v-for="element in 5 - Math.round(details.vote_average / 2)">
                    <font-awesome-icon icon="fa-regular fa-star" />
                </li>
            </ul>
        </div>

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

        img {
            width: 40px;
        }
    }

    #vote {
        display: flex;
        justify-content: center;

        ul {
            display: flex;
            list-style: none;
            color: rgb(207, 159, 0);
            font-size: 22px;
        }
    }
}
</style>
