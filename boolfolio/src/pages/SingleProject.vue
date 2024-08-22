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
    getProject(id) {
      axios
        .get(`http://127.0.0.1:8000/api/projects/${id}`, {
          params: {},
        })
        .then((response) => {
          console.log(response.data.results);
          this.projects.push(response.data.results);
          console.log(this.projects.array);
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
    this.getProject(this.$route.params.id);
  },
};
</script>
<template>
  <table v-for="project in projects" class="table">
    <tbody>
      <tr>
        <td>
          {{ project.nome }}
        </td>
      </tr>

      <tr>
        <td>Descrizione: {{ project.descrizione }}</td>
      </tr>
      <tr>
        <td>Descrizione: {{ project.data_inizio }}</td>
      </tr>
      <tr>
        <td>Descrizione: {{ project.data_fine }}</td>
      </tr>
      <tr>
        <td v-if="project.completato > 0">Completato: Si</td>
        <td v-else>Completato: No</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss"></style>
