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
  <div class="container card-container">
    <div v-for="project in projects" class="card">
      <h3>{{ project.nome }}</h3>
      <p>Descrizione: {{ project.descrizione }}</p>
      <p>
        <font-awesome-icon :icon="['fas', 'calendar-days']" /> Data di inizio
        del progetto:
        {{ project.data_inizio }}
      </p>
      <p>Data fine del progetto: {{ project.data_fine }}</p>
      <p v-if="project.completato > 0">Completato: Si</p>
      <p v-else>Completato: No</p>
    </div>
  </div>
</template>

<style lang="scss">
.card-container {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  div {
    width: 23rem;
    margin: 1rem;
    padding: 1rem;

    h3 {
      color: #3787fd;
    }
  }
}
</style>
