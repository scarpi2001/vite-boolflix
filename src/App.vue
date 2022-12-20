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
@use "./styles/general" as*;
</style>
