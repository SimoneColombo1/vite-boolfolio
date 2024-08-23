<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<style lang="scss">
@use "./Style/general.scss";
</style>
