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
    <h1 id="logo">BOOLFLIX</h1>
    <h1 id="mini-logo">B</h1>
    <AppSearch @search="getSearch" />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: red;
  background-color: black;
  height: 80px;
  padding: 0 30px;

  #mini-logo {
    display: none;
  }
}

@media screen and (max-width: 480px) {

header {
    #logo {
      display: none;
    }

    #mini-logo {
      display: block;
    }
}

}
</style>
