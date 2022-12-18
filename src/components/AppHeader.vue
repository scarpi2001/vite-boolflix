<script >
import axios from 'axios';
import AppSearch from './header_components/AppSearch.vue';

import { store } from '../store';
export default {
  name: "AppHeader",
  components: {
    AppSearch,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getSearch() {

      let myUrl = store.popularsApiUrl;

      if (store.query !== "") {
        myUrl = `${store.multiApiURL}&query=${store.query}&language=it-IT`
      }
      axios.get(myUrl)
        .then(res => {
          store.moviesList = res.data.results;
        })
        .catch(err => {
          console.log("Errori", err);
        }

        );

    }
  },
  mounted() {
    this.getSearch();
  }
}
</script>

<template>
  <header>
    <h1>BOOLFLIX</h1>
    <AppSearch @search="getSearch" />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  color: red;
  background-color: black;
  height: 80px;
  padding: 30px;
}
</style>
