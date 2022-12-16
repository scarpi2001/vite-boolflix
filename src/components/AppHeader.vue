<script >
import AppSearch from './header_components/AppSearch.vue';
export default {
  name: "AppHeader",
  components: {
    AppSearch,
  }
}
</script>

<template>
  <header>
    <h1>BOOLFLIX</h1>
    <AppSearch />
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
