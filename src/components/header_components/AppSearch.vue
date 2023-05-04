<script >
import { store } from '../../store';

export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="search_container">
        <input type="text" placeholder="Cosa vuoi vedere?" v-model="store.query">
        <button class="search" @click="$emit('search')">Search</button>
    </div>
</template>

<style lang="scss" scoped>
    .search_container {
        input {
            width: 300px;
            padding: 10px;
            border-radius: 5px;
            margin-right: 20px;
        }

        button {
            padding: 10px;
            border-radius: 5px;
        }
    }

    @media screen and (max-width: 650px) {

        .search_container {
            input {
                width: 140px;
            }
        }

    }
</style>
