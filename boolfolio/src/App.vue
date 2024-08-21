<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  name: "",
  components: {
    AppHeader,
    AppMain,
  },
};
</script>
<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@use "./Style/general.scss";
</style>
