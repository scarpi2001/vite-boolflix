<script >
import AppMoviesList from './main_components/AppMoviesList.vue';
import { store } from '../store';

export default {
    name: "AppMain",
    components: {
        AppMoviesList,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <AppMoviesList />
</template>

<style lang="scss" scoped>

</style>
