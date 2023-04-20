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
        <input type="text" placeholder="Cerca un film o una serie" v-model="store.query">
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
</style>
