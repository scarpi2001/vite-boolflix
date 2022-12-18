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

</style>
