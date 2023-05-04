<script >
export default {
    name: "AppMovie",
    props: {
        details: Object
    },
    methods: {
        getVote() {
            let vote = Math.round(this.details.vote_average / 2);
            console.log(this.details.vote_average);
            console.log(vote);
            return vote;
        },
        getEmpty() {
            let empty = 5 - Math.round(this.details.vote_average / 2);
            console.log(this.details.vote_average);
            console.log(empty);
            return empty;
        }
    }
}
</script>

<template>
    <!-- card -->
    <div class="movie">

        <!-- locandina -->
        <img :src="`https://image.tmdb.org/t/p/w342/${details.poster_path}`" alt="">
        
        <div class="card_hover">
            <!-- titolo -->
            <h3>Titolo: {{ details.name || details.title }}</h3>

            <!-- titolo originale -->
            <h4>Titolo originale: {{ details.original_name || details.original_title }}</h4>

            <!-- img flag corrispondente alla lingua -->
            <div class="lang">
                <img v-if="details.original_language === 'en'" src="../../assets/img/gb.svg" alt="">
                <img v-else-if="details.original_language === 'it'" src="../../assets/img/it.svg" alt="">
                <img v-else-if="details.original_language === 'fr'" src="../../assets/img/fr.svg" alt="">
                <img v-else src="../../assets/img/unknown.svg" alt="">
            </div>

            <!-- voto -->
            <div id="vote">
                <!-- <ul>
                    <li v-for="n in getVote">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </li>
                </ul>
                <ul>
                    <li v-for="n in getEmpty">
                        <font-awesome-icon icon="fa-regular fa-star" />
                    </li>
                </ul> -->
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

            <!-- overview -->
            <div>
                <p>
                <h3>Overview:</h3>
                {{ details.overview }}
                </p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.movie {
    width: calc(20% - 40px);
    margin: 30px 20px;
    position: relative;

    img {
        border-radius: 20px;
    }
    .card_hover {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        padding: 30px;
        border-radius: 20px;
        overflow-y: auto;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.8);

        .lang {
            margin-bottom: 5px;
        }

        #vote {
            display: flex;

            ul {
                display: flex;
                list-style: none;
                color: rgb(207, 159, 0);
                font-size: 22px;
            }
        }

    }

    &:hover .card_hover {
        display: block;
        cursor: pointer;
    }

}

//responsive
@media screen and (max-width: 1300px) {

    .movie {
        width: calc(25% - 40px);
    }

}

@media screen and (max-width: 750px) {

    .movie {
        width: calc(50% - 40px);
    }

}

@media screen and (max-width: 550px) {

.movie {
    display: flex;
    justify-content: center;
    width: 100%;
}

}
</style>
