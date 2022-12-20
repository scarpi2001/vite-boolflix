<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },

}

</script>

<template>
  <div id="wrapper">
    <AppHeader />

    <main>
      <AppMain />
    </main>
  </div>
</template>

<style lang="scss">
@use "./styles/partials/variables" as*;
@use "./styles/general" as*;

#wrapper {
  height: 100vh;

  main {
    overflow-y: auto;
    margin-top: 80px;
    background-color: #434343;
  }
}
</style>
