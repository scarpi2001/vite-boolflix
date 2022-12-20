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
    //chiamata API con URL filtrato attraverso proprietà di store 'query'
    getSearch() {

      let myUrl = store.popularsApi;

      if (store.query !== "") {
        myUrl = `${store.multiApi}&query=${store.query}&language=it-IT`
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
}
</style>
