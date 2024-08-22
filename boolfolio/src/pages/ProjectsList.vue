<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },

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
          this.projects = response.data.results.data;
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
<template>
  <ProjectCard />
</template>

<style scoped lang="scss"></style>
