<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getProject() {
      axios
        .get("http://127.0.0.1:8000/api/projects", {
          params: {},
        })
        .then((response) => {
          console.log(response.data.results.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },
  },
  created() {
    this.getProject();
  },
};
</script>
<template></template>

<style scoped lang="scss"></style>
