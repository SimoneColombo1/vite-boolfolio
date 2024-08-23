<script>
import axios from "axios";
export default {
  data() {
    return {
      projects: [],
      currentPage: 1,
      indexScroll: 0,
    };
  },
  methods: {
    getProject(page = 1) {
      axios
        .get("http://127.0.0.1:8000/api/projects", {
          params: {
            page: page,
          },
        })
        .then((response) => {
          console.log(response.data.results.data);
          this.projects.push(...response.data.results.data);
          this.currentPage = response.data.results.currentPage;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },
    scrollLeft() {
      this.indexScroll--;
      if (this.indexScroll >= 0) {
        this.$refs.scrollable.scrollBy({ left: -478, behavior: "smooth" });
        console.log(this.indexScroll);
      } else {
        this.$refs.scrollable.scrollBy({ left: 3500, behavior: "smooth" });
        this.indexScroll = this.projects.length - 2;
        console.log(this.indexScroll);
      }
    },
    scrollRight() {
      this.indexScroll++;
      if (this.indexScroll < this.projects.length - 2) {
        this.$refs.scrollable.scrollBy({ left: 478, behavior: "smooth" });

        console.log(this.indexScroll);
      } else {
        this.$refs.scrollable.scrollBy({ left: -3500, behavior: "smooth" });
        this.indexScroll = 0;
        console.log(this.indexScroll);
      }
    },
  },
  created() {
    this.getProject();
  },
};
</script>
<template>
  <a @click="scrollLeft()" class="left">
    <img src="../assets/img/leftarrow.png" />
  </a>
  <a @click="scrollRight()" class="right">
    <img src="../assets/img/rightarrow.png" />
  </a>
  <div class="container card-container" ref="scrollable">
    <router-link
      v-for="project in projects"
      :to="{ name: 'SingleProject', params: { id: project.id } }"
    >
      <div class="card">
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
      </div> </router-link
    ><a href="" class="" @click.prevent="getProject(currentPage + 1)">
      <img src="../assets/img/plus-sign.png" />
    </a>
  </div>
</template>

<style lang="scss">
img {
  width: 4rem;
  height: 4rem;
}

.left {
  position: absolute;
  bottom: 28rem;
  left: 4rem;
}
.right {
  position: absolute;
  bottom: 28rem;
  right: 4rem;
}
.card-container {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100vw;

  div {
    width: 18rem;
    height: 25rem;
    margin: 1rem;
    padding: 1rem;
    &:hover {
      background-color: lightgray;
    }

    h3 {
      color: #3787fd;
    }
  }
  a {
    margin: 1rem;

    img {
      border: 1px black solid;
      margin-top: 10rem;
    }
  }
}
</style>
