<script >
export default {
    name: "MovieVote",
}
</script>

<template>
    <div>
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
</template>

<style lang="scss" scoped>
div {
    display: flex;

    ul {
        display: flex;
        list-style: none;
        color: rgb(207, 159, 0);
        font-size: 22px;
    }
}
</style>
